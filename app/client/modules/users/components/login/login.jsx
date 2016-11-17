import React from 'react';


class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit(data) {
    this.props.submitAction(data.email, data.password);
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
            <span className="error-container">
                        <span className="error-text">
                          {err}
                        </span>
                      </span> : null }

          <form onSubmit={this.onSubmit} className="login-form">
            <div className="form-group">
              <label className="sr-only" htmlFor="email">Username</label>
              <input type="email" name="email" ref="email" placeholder="Email..."
                     className="form-control"/>
            </div>
            <div className="form-group">
              <label className="sr-only" htmlFor="password">Password</label>
              <input type="password" name="password" ref="password" placeholder="Password..."
                     className="form-control"/>
            </div>
            <button type="submit" className="btn full-width">Sign in!</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
