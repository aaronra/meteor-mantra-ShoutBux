import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {currentUser, logout, counts}= this.props;
    const {profile}= currentUser;
    return (
      <section id="user-profile">
        <div className="col-md-12 col-xs-12">
          <div className="user-container">
            <div className="panel panel-default userBox">
              <div className="panel-body">
                <div className="col-lg-5">
                  <img src={(profile) ? profile.photo : '/assets/users/photo/defaultPhoto.jpg'}
                       className="inline profile-photo lg"/>
                  <div className="inline">
                    <ul>
                      <li><h2 className="name">{(profile) ? profile.fullname : ''}</h2></li>
                      <li>@{currentUser.username}</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-5">
                  <table className="table profile-counts">
                    <thead>
                    <tr>
                      <th className="tableHeader">Shouts</th>
                      <th className="tableHeader">Friends</th>
                      <th className="tableHeader">Followers</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td className="tableContent">{counts.shouts}</td>
                      <td className="tableContent">{counts.friends}</td>
                      <td className="tableContent">{counts.following}</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-lg-2">
                  {(Meteor.userId() != currentUser._id) ?
                    <a href="/dashboard" className="btn pull-right">Back to Timeline</a>
                    : ''}
                  <button type="button" onClick={logout.bind(this)} className="btn pull-right">Log out!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Profile;
