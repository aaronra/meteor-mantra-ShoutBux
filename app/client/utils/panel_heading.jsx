import React from 'react';

class PanelHeading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {title} = this.props;
    return (
      <div className="panel-heading">
        <h3 className="panel-title">{(title) ? title : ''}</h3>
      </div>
    );
  }
}
PanelHeading.defaultProps = {
  title: React.PropTypes.string,
};


export default PanelHeading;
