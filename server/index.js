import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import userController from './controllers/users-controller';
import reportController from './core/report/report-controller';

let app = express();
const API_ENTRYPOINT = '/api/';

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use( bodyParser.json() );

app.use( API_ENTRYPOINT + 'users', userController );
app.use( API_ENTRYPOINT + 'report', reportController );

app.use(express.static(path.resolve(__dirname, '../dist/static')));

app.get('/static/bundle.js', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../dist/static/bundle.js'));
});

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

if(!module.parent) {
  app.listen( 3002, () => console.log( 'Running on localhost:3002' ) );
}

export default app; // need for tests