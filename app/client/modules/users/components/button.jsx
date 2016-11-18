import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  _addFriend() {
    const {userId, addFriend} = this.props;
    addFriend(userId);
  }

  render() {
    return (
      <button type="button" onClick={this._addFriend.bind(this)} className="btn btn-block">
        Add
      </button>
    );
  }
}

export default Button;
