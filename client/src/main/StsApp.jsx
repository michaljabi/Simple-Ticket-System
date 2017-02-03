import React from 'react';
import { Link } from 'react-router';
import Recaptcha from 'react-recaptcha';

require( './stsapp.scss' );

class StsApp extends React.Component {


  render () {
    const onloadCallback = () => {

    };
    const verifyCallback = ( data ) => {
      console.log( "verify", data )
    };
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
          <h3>Report a problem to Selling Platform Team</h3>
        </header>
        <div className="main container row">
          <div className="col-md-8">
            <form>
              <div className="form-group">
                <label htmlFor="title">What went wrong?</label>
                <input type="text" className="form-control" name="title" placeholder="Short description"
                       maxLength="255"/>
              </div>
              <div className="form-group">
                <label htmlFor="component">Specify where it happens:</label>
                <select name="component" className="form-control">
                  <option value={'page-clients'}> Clients page</option>
                  <option value={'page-products'}> Products list</option>
                  <option value={'other-part'}> Other part of the Selling Platform</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="description">Give us more details:</label>
                <textarea name="description" rows="5" className="form-control"/>
              </div>
              <div className="form-group">
                <label htmlFor="email">We will inform you about resolution process:</label>
                <input name="email" type="email" className="form-control" placeholder="Enter valid e-mail address"/>
              </div>
              <div className="form-group">
                <Recaptcha
                  sitekey="6Lf-w8sSAAAAAMjaicvzOhHuWykW10W2Yp5ioG7e"
                  render="explicit"
                  theme="light"
                  verifyCallback={verifyCallback}
                  onloadCallback={onloadCallback}
                />
              </div>
              <div className="form-buttons">
                <button type="button" className="btn pull-left" data-toggle="modal" data-target="#myModal">
                  <span className="glyphicon glyphicon glyphicon-remove"> </span>&nbsp;
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary pull-right" onClick={( e ) => e.preventDefault()}>
                  <span className="glyphicon glyphicon glyphicon-upload"> </span>&nbsp;
                  Submit this problem
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-4">
            <ul className="list-group">
              <li className="list-group-item">
                <h4>Provide e-mail for feedback!</h4>
                Explanation paragraph... 'why it is important to give an e-mail...'
              </li>
              <li className="list-group-item">
                <h4>We will generate special 'Ticket'</h4>
                An explanation what would happen when BReporter (Bug Reporter) will hit the "Submit" button
              </li>
              <li className="list-group-item">
                <h4>Be as specific as you can</h4>
                More explanation how to fill the form correctly.
              </li>
            </ul>
          </div>
        </div>
        <footer className="container">
          <p className="navbar-text pull-right">&copy; powered by Simple Ticket System</p>
        </footer>
      </div>
    )
  }
}

StsApp.propTypes = {};


export default StsApp;