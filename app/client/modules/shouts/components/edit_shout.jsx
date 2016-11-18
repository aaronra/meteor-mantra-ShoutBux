import React from 'react';

class EditShout extends React.Component {
  constructor(props) {
    super(props);
  }

  _updateShout() {
    const shout = this.refs.editShout.value;
    const {shoutId, updateShout, cancel} = this.props;
    updateShout(shoutId, shout);
    this.refs.editShout.value = '';
    cancel();
  }

  render() {
    const {cancel} = this.props;
    return (
      <section id="shout-edit">
          <textarea
            ref="editShout"
            id="shoutInput"
            className="form-control"
            placeholder="What's in your mind?"
            maxLength="32"
          ></textarea>
        <div>
          <button className="pull-right btn btn-default" onClick={cancel.bind(this)} type="button">Cancel
          </button>
          <button className="pull-right btn" onClick={this._updateShout.bind(this)} type="button">Update</button>
        </div>
      </section>
    );
  }
}

export default EditShout;
