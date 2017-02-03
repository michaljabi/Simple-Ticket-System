import React, { PropTypes }  from 'react';

const propTypes = {};

const defaultProps = {};

class ReportsPage extends React.Component {


  render () {
    return (
      <div>
        <div>
          <h1 className="page-header" style={{padding: 10}}>Reports:</h1>
        </div>
      </div>
    )
  }
}

ReportsPage.propTypes = propTypes;
ReportsPage.defaultProps = defaultProps;

export default ReportsPage;