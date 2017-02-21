import express from 'express';
import { validateNewlyReportedBug } from './validateNewlyReportedBug';
import { ticketGenerator } from './ticketGenerator';

let router = express.Router();

router.post( '/bug', ( req, res ) => {

  const validation = validateNewlyReportedBug( req.body );
  if ( validation.isValid ) {
    res.json( { ticket: ticketGenerator() } );
  } else {
    res.status( 400 ).json( { errors: validation.errors } );
  }
} );


export default router;