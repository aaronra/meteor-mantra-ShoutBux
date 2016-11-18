
export default {
  postShout({Meteor, LocalState}, shout) {
    LocalState.set('SHOUT_ERROR', null);
    if (!shout) {
      return LocalState.set('SHOUT_ERROR', 'Write something to shout!');
    }
    Meteor.call('shout.insert', shout);
  },
  updateShout({Meteor, LocalState, FlowRouter}, shoutId, shout) {
    LocalState.set('SHOUT_ERROR', null);
    if (!shoutId) {
      return LocalState.set('SHOUT_ERROR', 'Your need to shout Something');
    }
    Meteor.call('shouts.update', shoutId, shout);

  },
  deleteShout({Meteor, LocalState, FlowRouter}, shoutId) {
    LocalState.set('SHOUT_ERROR', null);
    if (!shoutId) {
      return LocalState.set('SHOUT_ERROR', 'Your need to shout Something');
    }
    Meteor.call('shouts.delete', shoutId);

  },

  clearErrors({LocalState}) {
    return LocalState.set('SHOUT_ERROR', null);
  },
}
