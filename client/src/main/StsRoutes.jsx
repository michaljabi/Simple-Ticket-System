import React from 'react';
import { Route, IndexRoute } from 'react-router';
import SimpleTicketSystemApp from './SimpleTicketSystemApp';
import { ReportProblemPage } from './reporter/problem/ReportProblemPage';
import { TicketInformationPage } from './reporter/ticket/TicketInformationPage';

export default (
  <Route path="sts" >
    <Route path="report-a-problem" component={SimpleTicketSystemApp}>
      <IndexRoute component={ReportProblemPage}/>
    </Route>
    <Route path="ticket/:ticketId" component={SimpleTicketSystemApp}>
      <IndexRoute component={TicketInformationPage}/>
    </Route>
  </Route>
)