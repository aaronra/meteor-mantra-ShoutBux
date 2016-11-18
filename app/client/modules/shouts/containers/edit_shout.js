import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import EditShout from '../components/edit_shout.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const error = LocalState.get('SHOUT_ERROR');
  onData(null, {error});
};

export const depsMapper = (context, actions) => ({
  updateShout: actions.shout.updateShout,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(EditShout);
