export default {
  login({Meteor, LocalState, FlowRouter}, email, password) {
    if (!email || !password) {
      return LocalState.set('LOGIN_ERROR', 'Email & Password are required!');
    }

    LocalState.set('LOGIN_ERROR', null);

    Meteor.loginWithPassword(email, password, (err) => {
      if (err && err.reason) {
        return LocalState.set('LOGIN_ERROR', err.reason);
      }
      if (Meteor.user()) {
        let path = '/dashboard';
        FlowRouter.go(path);
      }
    });
  }
}
