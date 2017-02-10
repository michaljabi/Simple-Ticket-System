import React from 'react';
import { Route, IndexRoute } from 'react-router';
import SimpleTicketSystemApp from './SimpleTicketSystemApp';
import { ReportProblemPage } from './reporter/problem/ReportProblemPage';

export default (
  <Route path="sts" >
    <Route path="report-a-problem" component={SimpleTicketSystemApp}>
      <IndexRoute component={ReportProblemPage}/>
    </Route>
  </Route>
)