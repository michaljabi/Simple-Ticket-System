import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import SellingPlatformApp from './sellplatform/SellingPlatformApp';
import AdminSellingPlatformPage from './sellplatform/pages/ProductsManagementPage';

render(
  <Router history={browserHistory} >
    <Route path="/" component={SellingPlatformApp} >
      <IndexRoute component={AdminSellingPlatformPage}/>
    </Route>
  </Router>,
  document.getElementById('selling-platform-entry-point')
);