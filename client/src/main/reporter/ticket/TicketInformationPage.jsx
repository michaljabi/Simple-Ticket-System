import React from 'react'
import { Link } from 'react-router';

export class TicketInformationPage extends React.Component {

  render () {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-collapse">
              <ul className="nav nav-pills" role="tablist">
                <li><Link to={"/"}><span className="glyphicon glyphicon-menu-left"> </span> Back to panel</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="well">
          <h3>New ticket was generated: {this.props.params.ticketId}</h3>
        </header>
      </div>
    );
  }
}



