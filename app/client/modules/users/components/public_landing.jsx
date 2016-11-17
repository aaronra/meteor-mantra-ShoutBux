import React from 'react';
import Login from '/client/modules/users/containers/login';


class PublicLanding extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        <div className="container">
          <div className="row">
            <h2 className="title">ShoutBux</h2>
            <Login/>
          </div>
        </div>
      </div>
    );
  }
}

export default PublicLanding;
