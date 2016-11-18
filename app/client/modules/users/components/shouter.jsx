import React from 'react';
import Button from '/client/modules/users/containers/button';

class Shouter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {user, userId, friend}= this.props;
    const {profile} = user;
    const defaultPhoto = '/assets/users/photo/defaultPhoto.jpg';
    return (
      <li className="list-group-item">
        {(user) ?
          <div>
            <a href={(userId)?`/dashboard/${userId}`:''}>
              {(profile) ?
                <div>
                  <div className="inline">
                    <img src={(profile.photo)? profile.photo :defaultPhoto} className="inline profile-photo sm"/>
                  </div>
                  <div className="inline">
                    <div className="block lh-18 profile-name">
                      {(profile.fullname) ? <span>{profile.fullname}</span> : ''}
                    </div>
                    <div className="block lh-18">
                      {(user.username) ? <span>{user.username}</span> : ''}
                    </div>
                  </div>
                </div>
                : ''}
            </a>
            {(friend) ? '' : <Button userId={userId}/>}
          </div>
          : ''}
      </li>
    );
  }
}
Shouter.defaultProps = {
  user: React.PropTypes.object.isRequired,
  userId: React.PropTypes.string.isRequired,
  friend: React.PropTypes.bool.isRequired,
};

export default Shouter;
