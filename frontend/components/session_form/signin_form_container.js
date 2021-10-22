import React from 'react';
import { connect } from 'react-redux';
import { clearErrors, demoLogin, login } from '../../actions/session_actions';
import SignInForm from './signin_form';

const mSTP = ({ errors }) => {
  debugger
  return {
    // errors: Object.values(errors.session),
  };
};

const mDTP = dispatch => {
  return {
    login: user => dispatch(login(user)),
    demoLogin: () => dispatch(demoLogin()),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mSTP, mDTP)(SignInForm);