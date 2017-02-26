import React from 'react';
import ReactDOM  from 'react-dom';
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import useRouterHistory from 'react-router/lib/useRouterHistory'
import IndexRoute from 'react-router/lib/IndexRoute'
import { createHistory } from 'history';
import SellingPlatformApp from './sellplatform/SellingPlatformApp';
import ProductsManagementPage from './sellplatform/pages/ProductsManagementPage';
import ClientsPage from './sellplatform/pages/ClientsPage';
import ReportsPage from './sellplatform/pages/ReportsPage';
import StsRoutes from './main/StsRoutes'

const resolveBasename = () => {
  let basename = "/";
  const $base = document.getElementsByTagName("base");
  if($base.length > 0){
    const $baseAttr = $base[0].attributes;
    if($baseAttr && $baseAttr.href){
      basename = $baseAttr.href.value;
    }
  }
  return basename;
}

ReactDOM.render(
  <Router history={ useRouterHistory( createHistory )( { basename: resolveBasename() } )}>
    <Route path="/" component={SellingPlatformApp}>
      <IndexRoute component={ProductsManagementPage}/>
      <Route path="clients" component={ClientsPage}/>
      <Route path="reports" component={ReportsPage}/>
    </Route>
    { StsRoutes }
  </Router>,
  document.getElementById( 'selling-platform-entry-point' )
);