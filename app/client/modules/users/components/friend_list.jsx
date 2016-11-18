import React from 'react';
import PanelHeading from '/client/utils/panel_heading';
import Shouter from '/client/modules/users/containers/shouter';

class FriendList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {friends}=this.props;
    return (
      <section id="friend-list" className="panel panel-default">
        <PanelHeading title="Friends"/>
        <ul className="list-group">
          {(friends) ? friends.map((friend, index)=>(
            <Shouter userId={friend} key={index} friend={true}/>
          )) : <li><h3>No Followed Friends yet!</h3></li>}
        </ul>
      </section>
    );
  }
}

export default FriendList;
