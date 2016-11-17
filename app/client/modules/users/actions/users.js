export default {
  login({Meteor, LocalState, FlowRouter}, username, password) {
    LocalState.set('LOGIN_ERROR', null);
    if (!username || !password) {
      return LocalState.set('LOGIN_ERROR', 'User name and Password required!');
    }

    Meteor.loginWithPassword(username, password, (err) => {
      if (err && err.reason) {
        return LocalState.set('LOGIN_ERROR', err.reason);
      }
      if (Meteor.user()) {
        let path = '/dashboard';
        FlowRouter.go(path);
      }
    });
  },
  clearErrors({LocalState}) {
    return LocalState.set('LOGIN_ERROR', null);
  }
}
