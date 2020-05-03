import axios from 'axios';

export const FILM_SET_LIST_FILM = 'FILM_SET_LIST_FILM';
export const FILM_SET_LIST_FILM_DETAIL = 'FILM_SET_LIST_FILM_DETAIL';

export const setFilms = (films) => ({
  type: FILM_SET_LIST_FILM,
  payload: films,
});


export const setFilmDetail = (film) => ({
  type: FILM_SET_LIST_FILM_DETAIL,
  payload: film,
});


export const fetchFilms = () => async (dispatch) => {
  const response = await axios.get('https://ghibliapi.herokuapp.com/films');
  dispatch(setFilms(response.data));
};

export const fetchFilmDetail = (id) => async (dispatch) => {
  const response = await axios.get(`https://ghibliapi.herokuapp.com/films${id}`);
  dispatch(setFilms(response.data));
};
