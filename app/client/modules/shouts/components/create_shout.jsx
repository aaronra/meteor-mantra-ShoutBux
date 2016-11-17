import React from 'react';
import PanelHeading from '/client/utils/panel_heading';


class CreateShout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textLength: 32,
    }
  }

  handleChange(event) {
    const input = event.target.value;
    const maxChars = 32;
    this.setState({
      textLength: maxChars - input.length
    });
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
  onChange={this.handleChange.bind(this)}
></textarea>
          <p>Characters Left: {this.state.textLength}</p>
        </div>
      </section>
    );
  }
}

export default CreateShout;
