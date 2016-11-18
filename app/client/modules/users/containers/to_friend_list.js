import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ToFriendList from '../components/to_friend_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionsReady = [Meteor.subscribe('user.toFollow').ready()];
  const dataReady = ()=> {
    const friendlist = Collections.Friends.findOne({owner: Meteor.userId()});
    const {friends} = (friendlist) ? friendlist : [];
    const user = Meteor.user();
    const selector = {_id: {$ne: Meteor.userId()}};
    const toFollow = (friends) ? _.without.apply(_, [_.pluck(Meteor.users.find(selector).fetch(), '_id')].concat(friends)) : [];
    onData(null, {user, toFollow});
  };
  (subscriptionsReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ToFriendList);
