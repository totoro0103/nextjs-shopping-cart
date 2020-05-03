import React from 'react';
import { connect, useSelector } from 'react-redux';
import Route from 'next/router';
import Layout from '../components/Layout';
import initialize from '../utils/initialize';
import actions from '../modules/Auth/actions';

const Index = (props) => {
  const user = useSelector((state) => state.user);
  return (
    <Layout>
      <h1> USER INFO</h1>
      {JSON.stringify(user)}
      <br />
      <br />
      <br />
      <br />
      {props.isLogged && (
      <button
        type="button"
        onClick={() => {
          props.deauthenticate();
          window.location.reload();
        }}
      >
        Log out
      </button>
      )}
      {!props.isLogged && (
      <button
        type="button"
        style={{ marginTop: 20 }}
        onClick={() => Route.push('/login')}
      >
        Go to login
      </button>
      )}
    </Layout>
  );
};
Index.getInitialProps = (ctx) => {
  initialize(ctx);
};

const mapStateToProps = (state) => ({
  isLogged: !!state.authentication.token,
});

export default connect(mapStateToProps, actions)(Index);
