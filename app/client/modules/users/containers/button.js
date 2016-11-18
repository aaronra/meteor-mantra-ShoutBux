import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Button from '../components/button.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  addFriend: actions.users.addFriend,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Button);
