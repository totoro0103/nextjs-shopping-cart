import axios from 'axios';
import Route from 'next/router';
import { API } from '../../config';
import { setCookie, removeCookie } from '../../utils/cookie';
import { fetchUser } from '../User/actions';

export const AUTHENTICATE = 'AUTHENTICATE';
export const DEAUTHENTICATE = 'DEAUTHENTICATE';

// gets token from the api and stores it in the redux store and in cookie
const authenticate = ({ email, password }) => (dispatch) => {
  axios.post(`${API}/auth/signin`, { email, password })
    .then((response) => {
      setCookie('token', response.data.access_token);
      Route.push('/');
      dispatch({ type: AUTHENTICATE, payload: response.data.access_token });
      dispatch(fetchUser(response.data.access_token));
    })
    .catch((err) => {
      throw new Error(err);
    });
};

// gets the token from the cookie and saves it in the store
const reauthenticate = (token) => (dispatch) => {
  dispatch({ type: AUTHENTICATE, payload: token });
};

// removing the token
const deauthenticate = () => (dispatch) => {
  removeCookie('token');
  Route.push('/');
  dispatch({ type: DEAUTHENTICATE });
};


export default {
  authenticate,
  reauthenticate,
  deauthenticate,
};
