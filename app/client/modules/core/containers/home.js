import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Home from '../components/home.jsx';

export const composer = ({context, userId}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionsReady =
    [Meteor.subscribe('user.current', userId).ready,
      Meteor.subscribe('user.friendList', userId).ready];
  const dataReady = ()=> {
    const currentUser = (userId) ? Meteor.users.findOne({_id: userId}) : Meteor.user();
    const friendList = (userId) ? Collections.Friends.findOne({owner: userId}) : Collections.Friends.findOne({owner: Meteor.userId()});
    const {following, friends} = (friendList) ? friendList : [];
    const shoutCount = Collections.Shouts.find().count();
    const counts = {
      shouts: shoutCount,
      following: _.size(following),
      friends: _.size(friends),
    };
    onData(null, {currentUser, counts});
  };
  (subscriptionsReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Home);
