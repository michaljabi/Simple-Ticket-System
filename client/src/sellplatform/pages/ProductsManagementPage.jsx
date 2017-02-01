import React from 'react';

class ProductsManagementPage extends React.Component {
  
  render () {
    return (
      <div>
            <h1 className="page-header" style={{padding: 10}}>Product list:</h1>
            <div className="jumbotron">
              <h4>
                <span className="glyphicon glyphicon-repeat icon-spin"> </span>
                &nbsp;Loading products...
              </h4>
            </div>
      </div>
    )
  }
}

export default ProductsManagementPage;