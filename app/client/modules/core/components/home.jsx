import React from 'react';
import {CreateShout, ShoutList} from '/client/modules/shouts/containers/';
import {FriendList, UserProfile, ToFriendList} from '/client/modules/users/containers/';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {currentUser, userId, counts} = this.props;
    return (
      <section id="home" className="container">
        <div className="row content-wrapper">

          <UserProfile currentUser={currentUser} counts={counts}/>
          <div className="col-md-4 col-xs-12 col-lg-4">
            <FriendList/>
            <ToFriendList/>
          </div>
          <div className="col-md-8 col-lg-8 col-xs-12">
            {(userId) ? '' : <CreateShout/>}
            <ShoutList userId={userId}/>
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
