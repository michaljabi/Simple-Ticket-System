import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';

export const validate = ( { title, email, isVerified } ) => {

  const errors = {};

  if ( isEmpty( title ) ) {
    errors.title = 'Title field is required';
  }

  if ( !isEmpty( email ) ) {
    if ( !isEmail( email ) ) {
      errors.email = 'This is not a valid e-mail address, please correct it to receive ticket information';
    }
  }

  if ( !isVerified ) {
    errors.isVerified = 'You must confirm you\'re not a robot';
  }


  return errors;
};