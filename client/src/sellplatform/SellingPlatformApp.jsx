import React, { PropTypes } from 'react';
import NavigationBar from './main/NavigationBar';
import Footer from './main/Footer';
require("./sellingplatformapp.scss");

const contextTypes = {
  router: PropTypes.object.isRequired
};

class SellingPlatformApp extends React.Component {

  constructor (){
    super();
    this.openSimpleTicketSystem = this.openSimpleTicketSystem.bind(this);
  }

  openSimpleTicketSystem(){
    this.context.router.push( '/report-a-problem' );
  }
  
  render () {

    const username = 'Worker';

    return (
      <div>
        <h1></h1>
        <NavigationBar username={username} />
          <div id="pages">
            {this.props.children}
          </div>
        <Footer onSubmitTicketButtonClick={this.openSimpleTicketSystem} />
      </div>
    )
  }
}

SellingPlatformApp.contextTypes = contextTypes;

export default SellingPlatformApp;