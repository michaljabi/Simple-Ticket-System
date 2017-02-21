import { isEmail } from 'validator';
import { checkIsFieldValid, isRequired, makeErrorObject } from '../../utils/validationUtil';

export const validateNewlyReportedBug = ({title, email}) => {

  const errors = makeErrorObject({
    title : checkIsFieldValid(title, { isRequired }),
    email :  checkIsFieldValid(email, { isEmail })
  });
  if(!errors.isEmpty){
    return {
      isValid: false,
      errors
    }
  }
  return { isValid: true }
};