import React from 'react'
import { Link } from 'react-router';

export class TicketInformationPage extends React.Component {

  render () {
    return (
      <div>
        <h2>New ticket was generated: {this.props.params.ticketId}</h2>
      </div>
    );
  }
}



