import express from 'express';
import mockUsers from '../mock/mock-users.json';

let router = express.Router();

router.get( '/', ( req, res ) => {
  res.json( mockUsers );
});


export default router;