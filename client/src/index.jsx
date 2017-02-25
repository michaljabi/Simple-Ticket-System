import React from 'react';
import ReactDOM  from 'react-dom';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import SellingPlatformApp from './sellplatform/SellingPlatformApp';
import ProductsManagementPage from './sellplatform/pages/ProductsManagementPage';
import ClientsPage from './sellplatform/pages/ClientsPage';
import ReportsPage from './sellplatform/pages/ReportsPage';
import StsRoutes from './main/StsRoutes'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={SellingPlatformApp}>
      <IndexRoute component={ProductsManagementPage}/>
      <Route path="clients" component={ClientsPage}/>
      <Route path="reports" component={ReportsPage}/>
    </Route>
    { StsRoutes }
  </Router>,
  document.getElementById( 'selling-platform-entry-point' )
);