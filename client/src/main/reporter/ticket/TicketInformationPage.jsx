import React from 'react'
import EventEmitter from "../../../EventEmitter";

export class TicketInformationPage extends React.Component {

  state = {
    info: ''
  }

  componentDidMount () {
    EventEmitter.listen( 'messageChanged', ( { target }, data ) => {
      target.setState( { info: data.message } );
    }, this );
  }

  componentWillUnmount () {
    EventEmitter.dismiss( 'messageChanged', this );
  }

  render () {
    const { ticketId } = this.props.params;
    /*if(!ticketId){
      return (
        <div>
          No ticket provided....
        </div>
      );
    }*/
    return (
      <div>
        {this.state.info}
        <h2>New ticket was generated: {ticketId}</h2>
      </div>
    );
  }
}



