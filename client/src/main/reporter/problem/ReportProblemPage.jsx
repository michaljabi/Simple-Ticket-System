import React from 'react'
import { ReportTicketForm, Explanation } from './index'
require( './report-problem-page.scss' );

export class ReportProblemPage extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  handleFormCancel  = (evt) => {
    evt.preventDefault();
    this.context.router.push( '/' );
  };
  
  render () {
    return (
      <div>
        <div className="main container row">
          <div className="col-md-8">
            <ReportTicketForm onFormCancel={this.handleFormCancel}/>
          </div>
          <Explanation />
        </div>
      </div>
    );
  }
}



