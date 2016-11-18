import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import FriendList from '../components/friend_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionsReady = [Meteor.subscribe('user.friendList', '').ready];
  const dataReady = ()=> {
      const friendlist = Collections.Friends.findOne({owner: Meteor.userId()});
      const {friends} = (friendlist) ? friendlist : [];
      const user = Meteor.user();
      onData(null, {user, friends});
    }
    ;
  (subscriptionsReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(FriendList);
