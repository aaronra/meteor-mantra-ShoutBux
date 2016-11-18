import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Shouter from '../components/shouter.jsx';

export const composer = ({context, userId}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionsReady = [Meteor.subscribe('user.current', userId).ready];
  const dataReady = ()=> {
    const user = Meteor.users.findOne({_id: userId});
    onData(null, {user});
  };
  (subscriptionsReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Shouter);
