import React from 'react';



class StsApp extends React.Component {

  render () {

    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

StsApp.propTypes = {};


export default StsApp;