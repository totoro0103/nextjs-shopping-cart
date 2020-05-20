/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
import App from 'next/app';
import { wrapper } from '../store';

export default wrapper.withRedux(
  class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: {
          ...(Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {}),
        },
      };
    }

    render() {
      const { Component, pageProps } = this.props;
      return (
        <Component {...pageProps} />
      );
    }
  },
);
