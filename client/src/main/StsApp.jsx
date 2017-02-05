import React from 'react';

import {ReportProblemPage} from './reporter/problem'



class StsApp extends React.Component {

  render () {

    return (
      <div>
        <ReportProblemPage />
      </div>
    )
  }
}

StsApp.propTypes = {};


export default StsApp;