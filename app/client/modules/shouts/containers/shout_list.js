import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ShoutList from '../components/shout_list.jsx';

export const composer = ({context, userId}, onData) => {
  const {Meteor, Collections} = context();

  const subscriptionsReady = [Meteor.subscribe('shout.list', userId).ready, Meteor.subscribe('user.friendList', userId).ready];
  const dataReady = ()=> {
    const selector = {};
    const options = {sort: {date: -1}};
    const friendlist = Collections.Friends.findOne();
    const {followers, friends} = (friendlist) ? friendlist : [];
    const userShout = Collections.Shouts.find(selector, options).fetch();
    const shouts = (userId) ?
      (Meteor.userId() == userId) ?
        userShout : (_.contains(friends, userId)) ?
        userShout : ''
      : userShout;
    onData(null, {shouts});
  };
  (subscriptionsReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ShoutList);
