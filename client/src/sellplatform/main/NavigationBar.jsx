import React from 'react';
import { Link } from 'react-router';
import isRequired from '../utils/is-required';

export default function NavigationBar({username = isRequired('username', 'NavigationBar')}) {
  
  return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <span className="navbar-brand">ACME Selling </span>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to="/">Products</Link></li>
            <li><Link to="/clients">Clients</Link></li>
            <li><Link to="/reports">Reports</Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li style={{paddingTop: 6, paddingLeft: 10}}>
              <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-bell"> </span><span className="badge" style={{backgroundColor: '#951717'}}>2</span></button>
            </li>
            <li><a href="#"><span className="glyphicon glyphicon-user"> </span>&nbsp; {username}</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};