import React from 'react'

export function Explanation () {

  return (
    <div className="col-md-4">
      <ul className="list-group">

        <li className="list-group-item">
          <h4>We will generate special 'Ticket'</h4>
          You encountered a problem on our application? Do not worry, we will help you as soon as we can.
          After filling in this simple form, our Help Desk will receive the problem description from you.
          The problem will be given a special TICKET. This is made for identification purposes.
          Then you can observe how the problem with application is being handled.
        </li>
        <li className="list-group-item">
          <h4>Provide e-mail for feedback!</h4>
          When you give us an e-mail address it will be used only for informational purposes.
          We will inform you about the Ticket process. On the other hand if you wont give us an e-mail,
          you need to save a link for the Ticket and visit it on your own to see what actions did Help Desk perform.
        </li>
        <li className="list-group-item">
          <h4>Be as specific as you can</h4>
          Besides short description, please show us exactly <strong>where</strong> problem occurred and specify 
           <strong> more details</strong> about it.
        </li>
      </ul>
    </div>
  );
}
