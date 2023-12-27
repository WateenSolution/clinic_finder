import {HTTP_CLIENT, ENDPOINTS} from '../utilities';

export const loginApi = params => {
  return HTTP_CLIENT.post(ENDPOINTS.LOGIN, params);
};

export const logoutApi = params => {
  return HTTP_CLIENT.post(ENDPOINTS.LOGOUT, params);
};
