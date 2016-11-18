import React from 'react';
import PanelHeading from '/client/utils/panel_heading';


class CreateShout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textLength: 32,
    }
  }

  _postShout() {
    const {postShout} = this.props;
    
    postShout(this.refs.shout.value);
    this.refs.shout.value = '';
    this.setState({textLength: 32});

  }

  handleChange(event) {
    const input = event.target.value;
    const maxChars = 32;
    this.setState({
      textLength: maxChars - input.length
    });
  }

  render() {
    const {error} = this.props;
    return (
      <section id="create-shout" className="panel panel-default">
        <PanelHeading title="Post a Shout"/>
        <div className="panel-body">
          {error ?
            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error: </span>
              {error}
            </div> : null }
          <textarea
            ref="shout"
            id="shoutInput"
            className="form-control"
            placeholder="What's in your mind?"
            maxLength="32"
            onChange={this.handleChange.bind(this)}
          ></textarea>
          <div>
            <p className="pull-left">Characters Left: {this.state.textLength}</p>
            <button className="pull-right btn" onClick={this._postShout.bind(this)} type="button">Shout</button>
          </div>
        </div>
      </section>
    );
  }
}

export default CreateShout;
