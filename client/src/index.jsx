import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import SellingPlatformApp from './sellplatform/SellingPlatformApp';
import ProductsManagementPage from './sellplatform/pages/ProductsManagementPage';
import ClientsPage from './sellplatform/pages/ClientsPage';
import ReportsPage from './sellplatform/pages/ReportsPage';
import StsApp from './main/StsApp';

render(
  <Router history={browserHistory} >
    <Route path="/" component={SellingPlatformApp} >
      <IndexRoute component={ProductsManagementPage}/>
      <Route path="/clients" component={ClientsPage}/>
      <Route path="/reports" component={ReportsPage}/>
    </Route>
    <Route path="/report-a-problem" component={StsApp} />
  </Router>,
  document.getElementById('selling-platform-entry-point')
);