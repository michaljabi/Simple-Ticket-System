import React from 'react';
import isRequired from '../utils/is-required';
require('./footer.scss');

export default function Footer({onSubmitTicketButtonClick = isRequired('onSubmitTicketButtonClick', 'Footer') }) {
  return (
    <footer className="container">
      <button className="navbar-btn btn-danger btn pull-right" onClick={onSubmitTicketButtonClick}>
        <span className="glyphicon glyphicon-exclamation-sign"> </span>  Report a problem
      </button>
      <p className="navbar-text pull-left">&copy; 2017 Selling Platform Inc.</p>
    </footer>
  );
};