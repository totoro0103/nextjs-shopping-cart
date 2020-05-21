import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import reducer from './reducer';

const initStore = (initialState = {}) => createStore(reducer, initialState,
  composeWithDevTools(applyMiddleware(thunk)));
export const wrapper = createWrapper(initStore, { debug: true });
export const foo = () => {};
