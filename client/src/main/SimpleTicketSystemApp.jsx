import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';

class SimpleTicketSystemApp extends React.Component {

  render () {

    return (
      <div>
        <Header/>
        <div>
          {this.props.children}
        </div>
        <Footer/>
      </div>
    )
  }
}

export default SimpleTicketSystemApp;