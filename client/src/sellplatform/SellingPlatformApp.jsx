import React from 'react';
import NavigationBar from './main/NavigationBar';
import Footer from './main/Footer';
require("./sellingplatformapp.scss");

class SellingPlatformApp extends React.Component {

  constructor (){
    super();
    this.openSimpleTicketSystem = this.openSimpleTicketSystem.bind(this);
  }

  openSimpleTicketSystem(){
     console.log("Opening STS....");
  }
  
  render () {

    const username = 'Worker';

    return (
      <div>
        <NavigationBar username={username} />
          <div id="pages">
            {this.props.children}
          </div>
        <Footer onSubmitTicketButtonClick={this.openSimpleTicketSystem} />
      </div>
    )
  }
}

SellingPlatformApp.propTypes = {};


export default SellingPlatformApp;