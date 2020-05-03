import Route from 'next/router';
import { getCookie } from './cookie';
import actions from '../modules/Auth/actions';
// checks if the page is being loaded on the server, and if so, get auth token from the cookie:
export default function (ctx) {
  if (ctx.isServer) {
    if (ctx.req.headers.cookie) {
      ctx.store.dispatch(actions.reauthenticate(getCookie('token', ctx.req)));
    }
  } else {
    const { token } = ctx.store.getState().authentication;

    if (token && (ctx.pathname === '/login' || ctx.pathname === '/register')) {
      setTimeout(() => {
        Route.push('/');
      }, 0);
    }
  }
}
