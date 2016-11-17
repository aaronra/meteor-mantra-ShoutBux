import React from 'react';
import UserProfile from '/client/modules/users/containers/profile';
import {CreateShout, ShoutList} from '/client/modules/shouts/containers/';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {currentUser} = this.props;
    return (
      <section id="home" className="container">
        <div className="row content-wrapper">

          <UserProfile currentUser={currentUser}/>
          <div className="col-md-4 col-xs-12 col-lg-4">

            <div className="panel panel-default">
              <div className="panel-body">
              </div>
            </div>

          </div>
          <div className="col-md-8 col-lg-8 col-xs-12">
            <CreateShout/>
            <ShoutList/>
          </div>
        </div>
      </section>
    );
  }
}
Home.defaultProps = {
  currentUser: React.PropTypes.object,
};

export default Home;
