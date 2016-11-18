import React from 'react';
import ShoutEdit from '/client/modules/shouts/containers/edit_shout';

class ShoutItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {edit: false};
  }

  edit() {
    this.setState({edit: !this.state.edit});
  }

  timeAgo(date) {
    return momentReactive(date).fromNow();
  }

  _deleteShout() {
    const {deleteShout, shout} = this.props;
    deleteShout(shout._id);
  }

  render() {
    const {user, shout} = this.props;
    const {profile} = user;
    const {edit} = this.state;
    const defaultPhoto = '/assets/users/photo/defaultPhoto.jpg';
    return (
      <li className="list-group-item">
        <div className="inline">
          <img src={(profile.photo)?profile.photo:defaultPhoto} className="inline profile-photo sm"/>
        </div>
        <div className="inline">
          <div className="block lh-18 profile-name">
            {profile.fullname}&nbsp;
            <span className="username">@{user.username}</span>
            {(!edit) ?
              (Meteor.userId() == user._id) ?
                <div className="inline">
                  <span onClick={this.edit.bind(this)} className="glyphicon glyphicon-pencil"
                        aria-hidden="true"></span>
                  <span onClick={this._deleteShout.bind(this)} className="glyphicon glyphicon-trash"
                        aria-hidden="true"></span>
                </div>
                : ''
              : ''}
          </div>
          {(edit) ?
            <ShoutEdit shoutId={shout._id} cancel={this.edit.bind(this)}/>
            : <div className="block lh-18">{shout.text}</div> }
        </div>
        <span className="pull-right"> {this.timeAgo(shout.date)
        }</span>
      </li>
    );
  }
}
ShoutItem.defaultProps = {
  momentReactive: {
    fromNow: ()=> {
      return ''
    }
  }
};

export default ShoutItem;
