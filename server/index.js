import express from 'express';
import bodyParser from 'body-parser';
import userController from './controllers/users-controller';
import reportController from './core/report/report-controller';
import expressValidator from 'express-validator';

let app = express();
const API_ENTRYPOINT = '/api/';

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use( bodyParser.json() );
app.use( expressValidator() );

app.use( API_ENTRYPOINT + 'users', userController );
app.use( API_ENTRYPOINT + 'report', reportController );

if(!module.parent) {
  app.listen( 3002, () => console.log( 'Running on localhost:3002' ) );
}

export default app; // need for tests