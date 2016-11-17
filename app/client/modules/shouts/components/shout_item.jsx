import React from 'react';

class ShoutItem extends React.Component {
  constructor(props) {
    super(props);
  }

  timeAgo(date) {
    return momentReactive(date).fromNow();
  }

  render() {
    const {shout} = this.props;
    const defaultPhoto = '/assets/users/photo/defaultPhoto.jpg';
    console.log(shout, 'yyy')
    return (
      <li className="list-group-item">
        <div className="inline">
          <img src={defaultPhoto} className="inline profile-photo sm"/>
        </div>
        <div className="inline">
          <div className="block">
            Name <span>username</span>
          </div>
          <div className="block">{shout.text}</div>
        </div>
        <span> {this.timeAgo(shout.date)
        }</span>
      </li>
    );
  }
}

export default ShoutItem;
