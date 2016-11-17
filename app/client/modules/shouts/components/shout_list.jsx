import React from 'react';
import PanelHeading from '/client/utils/panel_heading';

class ShoutList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="shout-list" className="panel panel-default">
        <PanelHeading title="Shouts"/>

        <ul className="list-group">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Morbi leo risus</li>
          <li className="list-group-item">Porta ac consectetur ac</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>

      </section>
    );
  }
}

export default ShoutList;
