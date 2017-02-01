import express from 'express';
import bodyParser from 'body-parser';
import userController from './controllers/users-controller';

let app = express();
const API_ENTRYPOINT = '/api/';

app.use( bodyParser.json() );
app.use( API_ENTRYPOINT + 'users', userController );

app.listen( 3002, () => console.log( 'Running on localhost:3002' ) );

export default app; // need for tests