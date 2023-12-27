const BASE_URL = 'http://44.209.217.79:5000/api'; // Live Url

const ENDPOINTS = {
  // Authentications
  REGISTER: '/users',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',

  //Home
  GET_HOME_DETAILS: '/head/revenue',
  GET_HEAD_BUSIN_DASH: '/head/business/dashboard',
  GET_BUSIN_LEADS: '/head/business/leads',
  GET_BUSIN_OPPOS: '/head/business/opportunities',
  GET_BUSIN_REVEN: '/head/business/revenues',

  // Lead
  GET_LEADS: '/head/leads',
  GET_HEAD_LEAD_DET: '/head/lead-details',
  GET_LEADS_FILT: '/head/lead-filters',
  UPDATE_LEAD: '/head/lead/update',

  // Opportunities
  GET_OPPORTUNITIES: '/head/opportunities',
  GET_HEAD_OPPO_DET: '/head/opportunity-details',
  GET_OPPORTUNITIES_FILT: '/head/opportunity-filters',
  UPDATE_OPPORTUNITY: '/head/opportunity/update',
  UPDATE_OPPORTUNITY_STAGE: '/head/opportunity/update-stage',

  // Accounts
  GET_ACCOUNTS: '/head/accounts',
  GET_ACCOUNTS_FILT: '/head/account-filters',
  GET_ACCOUNTS_SEARCH: '/head/search-account',

  // Notifications

  GET_NOTIFICATIONS: '/notifications',
  GET_NOTI_SETTINGS: '/notifications/settings',
  UPDATE_NOTI_SETTINGS: '/notifications/update-setting',
  SAVE_NOTIFICATIONS: '/add-fcm-token',

  // Businesses
  GET_HEAD_BUSIN_ALL: '/head/business/all',
  POST_HEAD_BUSIN_DASH: '/head/business/dashboard',
  SET_FAVOURITE_OPP: '/head/add-favourite',

  GET_HEAD_LEAD_STATUS: '/head/lead-status',
  GET_HEAD_CONTACTS: '/head/contacts',
  GET_HEAD_CONT_DET: '/head/contact-details',

  GET_HEAD_ACC_DET: '/head/account-details',
  ADD_ACCS: '/head/add-account',
  ADD_OPPOS: '/head/add-opportunity',
  ADD_LEADS: '/head/add-lead',
  GET_HEAD_LEADS: '/leads', // OLD API's
  GET_HEAD_OPPOS: '/opportunity',

  //Help
  GET_HELP: '/help',
};

export {BASE_URL, ENDPOINTS};
