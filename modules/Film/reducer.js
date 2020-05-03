import { FILM_SET_LIST_FILM, FILM_SET_LIST_FILM_DETAIL } from './actions';

const initialState = {
  list: [],
  detail: {},
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FILM_SET_LIST_FILM:
      return { ...state, ...{ list: action.payload } };
    case FILM_SET_LIST_FILM_DETAIL:
      return {
        ...state,
        ...{
          detail: action.payload,
        },
      };
    default:
      return state;
  }
};
