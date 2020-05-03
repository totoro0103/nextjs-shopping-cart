import axios from 'axios';
import { API } from '../../config';

export const SET_USER_DATA = 'SET_USER_DATA';
export const setUser = (user) => ({ type: SET_USER_DATA, payload: user });
export const fetchUser = (token) => async (dispatch) => {
  const response = await axios.get(`${API}/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const { user } = response.data;
  dispatch(setUser(user));
};
