import * as yup from 'yup';

export const loginFormFields = {
  email: '',
  password: '',
};
export const signupFormFields = {
  firstName: '',
  lastName: '',
  email: '',
  passport_no: '',
  visa_no: '',
  password: '',
};

export const LoginVS = yup.object().shape({
  email: yup
    .string()
    .required('Email required')
    .email('Please provide a valid email address'),
  password: yup.string().required('Password Required'),
});
export const SignUpVS = yup.object().shape({
  firstName: yup.string().optional('First name required').label('firstName'),
  lastName: yup.string().optional('Last name required').label('lastName'),
  email: yup
    .string()
    .optional('Email required')
    .email('Please provide a valid email address'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .optional('Password required'),
  passport_no: yup
    .string()
    .optional('Passport Number required')
    .label('passport_no'),
  visa_no: yup.string().optional('Visa Number required').label('visa_no'),
});
