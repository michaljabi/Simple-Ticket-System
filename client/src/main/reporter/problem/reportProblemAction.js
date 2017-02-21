import axios from 'axios';
import { translateErrorsFromServer } from './form/validateProblemReport';

const dataParser = ( res ) => {
  let data = res.data;
  return data ? data : {};
}

const rejectionPolicy = ( error ) => {

  return error.response ? Promise.reject( error.response ) : Promise.reject( {
      status: 500,
      data: {
        errors: { __connection: [ 'isConnected' ] }
      }
    } );
}

export const reportProblemAction = ( reportData ) => {
  axios.defaults.baseURL = '//localhost:3002';
  return axios.post( '/api/report/bug', reportData )
    .then( dataParser )
    .catch( rejectionPolicy )
    .catch( ( { data } ) => Promise.reject( translateErrorsFromServer( data.errors ) ));
}