import React from 'react';
import Login from '/client/modules/users/containers/login';
import Logo from '/client/utils/twitter_logo';

class PublicLanding extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        <div className="container">
          <div className="row">
            <Logo/>
            <Login/>
          </div>
        </div>
      </div>
    );
  }
}

export default PublicLanding;
