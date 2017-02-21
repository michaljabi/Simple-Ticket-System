import React from 'react';



class SimpleTicketSystemApp extends React.Component {

  render () {

    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default SimpleTicketSystemApp;