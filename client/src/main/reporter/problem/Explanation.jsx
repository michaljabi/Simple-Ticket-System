import React from 'react'

export const Explanation = () => {

  return (
    <div className="col-md-4">
      <ul className="list-group">
        <li className="list-group-item">
          <h4>Provide e-mail for feedback!</h4>
          Explanation paragraph... 'why it is important to give an e-mail...'
        </li>
        <li className="list-group-item">
          <h4>We will generate special 'Ticket'</h4>
          An explanation what would happen when BReporter (Bug Reporter) will hit the "Submit" button
        </li>
        <li className="list-group-item">
          <h4>Be as specific as you can</h4>
          More explanation how to fill the form correctly.
        </li>
      </ul>
    </div>
  );
};
