import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import trim from 'validator/lib/trim';

const isObjectEmpty = ( value ) => !(Object.getOwnPropertyNames( value ).length > 0);

const errorMapper = {
  isRequired : 'Title field is required',
  isEmail : 'This is not a valid e-mail address, please correct it to receive ticket information',
  isVerified : 'You must confirm you\'re not a robot',
  isConnected: 'There is no connection to the server'
}

export const validateProblemReportForm = ( { title = '', email, isVerified } ) => {

  const errors = {};
  title = trim( title );
  if ( isEmpty( title ) ) {
    errors.title = errorMapper.isRequired;
  }
  if ( email && !isEmpty( email ) ) {
    if ( !isEmail( email ) ) {
      errors.email = errorMapper.isEmail;
    }
  }
  if ( !isVerified ) {
    errors.isVerified = errorMapper.isVerified;
  }
  return isObjectEmpty( errors ) ? false : errors;
};

export const translateErrorsFromServer =  ( input ) => {

  const translate = (input) => errorMapper[input];
  const errors = {};
  Object.getOwnPropertyNames(input).forEach((key) => {
    if(input[key].length > 0){
      errors[key] = translate(input[key][0]);
    }
  });
  return isObjectEmpty( errors ) ? false : errors;
}