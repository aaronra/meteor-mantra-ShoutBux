import React from 'react';


class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  _login() {
    const {loginAction} = this.props;
    console.log('logging in');
    loginAction(this.refs.username.value, this.refs.password.value);
  };

  render() {
    const {err} = this.props;
    return (
      <div className="form-box col-sm-12 col-lg-6">

        <div className="form-top">
          <div className="form-top-left">
            <h3>Login</h3>
            <p>Enter username and password to log on:</p>
          </div>
          <div className="form-top-right">
            <i className="fa fa-lock"></i>
          </div>
        </div>
        <div className="form-bottom">
          {err ?
            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error: </span>
              {err}
            </div> : null }

          <form className="login-form">
            <div className="form-group">
              <label className="sr-only" htmlFor="email">Username</label>
              <input type="text" name="username" ref="username" placeholder="User name..."
                     className="form-control"/>
            </div>
            <div className="form-group">
              <label className="sr-only" htmlFor="password">Password</label>
              <input type="password" name="password" ref="password" placeholder="Password..."
                     className="form-control"/>
            </div>
            <button type="button" className="btn full-width" onClick={this._login.bind(this)}>Sign in!</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
