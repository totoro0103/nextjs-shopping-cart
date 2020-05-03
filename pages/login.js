import React from 'react';
import { connect } from 'react-redux';
import actions from '../modules/Auth/actions';

const Login = (props) => (
  <div>
    <button
      type="button"
      onClick={() => props.authenticate({ email: 'hoangpt@hblab.vn', password: '123456' })}
    >Login
    </button>
  </div>
);

export default connect(null, actions)(Login);
