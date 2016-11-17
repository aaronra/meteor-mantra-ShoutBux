import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {currentUser}= this.props;
    const {profile}= currentUser;
    console.log(currentUser);
    return (
      <section id="user-profile">
        <div className="col-md-12 col-xs-12">
          <div className="user-container">
            <div className="panel panel-default userBox">
              <div className="panel-body">
                <div className="col-lg-5">
                  <img src={(profile)?profile.photo:'/assets/users/photo/defaultPhoto.jpg'}
                       className="inline profile-photo lg"/>
                  <div className="inline">
                    <ul>
                      <li><h2 className="name">{(profile) ? profile.fullname : ''}</h2></li>
                      <li>@{currentUser.username}</li>
                      <li></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-5">
                  <table className="table profile-counts">
                    <thead>
                    <tr>
                      <th className="tableHeader">Shouts</th>
                      <th className="tableHeader">Following</th>
                      <th className="tableHeader">Followers</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td className="tableContent">1</td>
                      <td className="tableContent">2</td>
                      <td className="tableContent">2</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-lg-2 ">
                  <button type="button" className="btn pull-right">Sign in!</button>
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
