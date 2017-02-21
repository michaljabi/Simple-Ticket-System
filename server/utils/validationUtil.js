export const isRequired = (value) => !!value;

export const isEmpty = (value) => !(Object.getOwnPropertyNames(value).length > 0);

export const makeErrorObject = (errors) => {
  const errorsOutput = {};
  for(let key in errors){
    if (errors.hasOwnProperty(key) && errors[key].length > 0) {
      errorsOutput[key] = errors[key]
    }
  }
  if(isEmpty(errorsOutput)){
    errorsOutput.isEmpty = true;
  }
  return errorsOutput;
}

export const checkIsFieldValid = (value, checkers) => {

  const errors = [];
  if(!value && !checkers.isRequired){ //It is not filled
    return errors;
  }
  for(let checker in checkers){
    if(checkers.hasOwnProperty(checker) && !checkers[checker](value)){
      errors.push(checker);
    }
  }
  return errors;
}