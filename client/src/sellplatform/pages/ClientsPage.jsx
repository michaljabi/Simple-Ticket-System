import React, { PropTypes }  from 'react';

const propTypes = {};

const defaultProps = {};

class ClientsPage extends React.Component {

  

  render () {
    return (
      <div>
        <h1 className="page-header" style={{padding: 10}}>Clients:</h1>
      </div>
    )
  }
}

ClientsPage.propTypes = propTypes;
ClientsPage.defaultProps = defaultProps;

export default ClientsPage;