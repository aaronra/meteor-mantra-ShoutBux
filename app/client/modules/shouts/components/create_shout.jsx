import React from 'react';
import PanelHeading from '/client/utils/panel_heading';


class CreateShout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="create-shout" className="panel panel-default">
        <PanelHeading title="Post a Shout"/>
        <div className="panel-body">
<textarea
  ref="textarea"
  id="shoutText"
  className="form-control"
  placeholder="What's in your mind?"
  maxLength="32"
></textarea>
        </div>
      </section>
    );
  }
}

export default CreateShout;
