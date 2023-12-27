import * as yup from 'yup';

export const loginFormFields = {
  username: '',
  password: '',
};

export const addOpportunityFields = data => {
  return {
    opportunityName: data?.deal_name || '',
    otc: data?.otc || '',
    mrc: data?.mrc || '',
    noOfLinks: data?.no_of_links || '',
    contractMonths: data?.contract_months?.toString() || '',
    tcv: data?.tcv || '',
    solarCapacity: data?.solar_capacity?.toString() || '',
    solarUnit: data?.solar_unit?.toString() || '',
    solarSysType: data?.solar_system_type || '',
    solarProduct: data?.solar_product || '',
    amount: data?.deal_amount.toString(),
    probability: data?.deal_probability.toString() || '',
    comment: data?.rca_comments || '',
  };
};

export const addAccountFields = {
  accountName: '',
  description: '',
};

export const addLeadFields = data => {
  return {
    leadName: data.lead || '',
    account: data?.account_name || '',
    kam: data?.kam_name || '',
    pocEmail: '',
    pocNumber: '',
    priority: data?.lead_priority || '',
    lob: data?.lob_name || '',
    details: data?.lead_details || '',
  };
};

export const forgotFormFields = {
  email: '',
};

export const LoginVS = yup.object().shape({
  username: yup.string().required('Usrname Required'),
  password: yup.string().required('Password Required'),
});

export const ForgotPasswordVS = yup.object().shape({
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
});

export const AddOpportunityVS = yup.object().shape({
  opportunityName: yup.string().optional('Opportunity Required'),
  otc: yup.string().optional('OTC Required'),
  mrc: yup.string().optional('MRC Required'),
  noOfLinks: yup.string().optional('No of Links Required'),
  contractMonths: yup.string().optional('Contract Months Required'),
  tcv: yup.string().optional('TCV Required'),
  solarProduct: yup.string().optional('Solar Product Required'),
  solarUnit: yup.string().optional('Solar Unit Required'),
  solarSysType: yup.string().optional('Solar System Type Required'),
  solarCapacity: yup.string().optional('Solar Capacity Required'),
  amount: yup.number().required('Amount Required'),
  probability: yup.number().required('Probability Required'),
  comment: yup.string().optional('Probability Required'),
});

export const AddAccountVS = yup.object().shape({
  accountName: yup.string().optional('Account Name Required'),
  description: yup.string().optional('Description Required'),
});

export const AddLeadVS = yup.object().shape({
  leadName: yup.string().optional('Lead Name Required'),
  details: yup.string().optional('Lead Details Required'),
  pocNumber: yup.string().optional('Contact Number Required'),
  pocEmail: yup.string().optional('Email Required'),
  kam: yup.string().optional('KAM Required'),
  lob: yup.string().optional('LOB Required'),
  priority: yup.string().optional('Priority Required'),
  account: yup.string().optional('Account Required'),
});
