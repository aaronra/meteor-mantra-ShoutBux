import React from 'react';
import PanelHeading from '/client/utils/panel_heading';
import ShoutItem from '/client/modules/shouts/containers/shout_item';

class ShoutList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {shouts} = this.props;
    return (
      <section id="shout-list" className="panel panel-default">
        <PanelHeading title="Shouts"/>
        <ul className="list-group">
          {(shouts) ? shouts.map((shout, index)=>(
            <ShoutItem shout={shout} key={index}/>
          ))
            : <li><h3>No Shout posted yet!</h3></li>}
        </ul>

      </section>
    );
  }
}

export default ShoutList;
