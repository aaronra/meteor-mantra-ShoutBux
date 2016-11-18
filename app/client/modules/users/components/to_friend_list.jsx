import React from 'react';
import PanelHeading from '/client/utils/panel_heading';
import Shouter from '/client/modules/users/containers/shouter';

class ToFriendList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {toFollow}= this.props;
    return (
      <section id="to-follow-list" className="panel panel-default">
        <PanelHeading title="New Friends to Follow"/>
        <ul className="list-group">
          {(!_.isEmpty(toFollow)) ? toFollow.map((toFriend, index)=>(
            <Shouter userId={toFriend} key={index} friend={false}/>
          )) : <li><h3>No more Friends to Follow!</h3></li>}
        </ul>
      </section>
    );
  }
}

export default ToFriendList;
