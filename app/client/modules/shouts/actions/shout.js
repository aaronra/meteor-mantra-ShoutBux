export default {
  postShout({Meteor, LocalState}, shout) {
    LocalState.set('SHOUT_ERROR', null);
    if (!shout) {
      return LocalState.set('SHOUT_ERROR', 'Write something to shout!');
    }
    console.log(shout, 'pasok')
    Meteor.call('shout.insert', shout);
  },
  clearErrors({LocalState}) {
    return LocalState.set('SHOUT_ERROR', null);
  },
}
