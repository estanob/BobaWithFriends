import React from 'react';
import { connect } from 'react-redux';
import { clearErrors, demoLogin, signup } from '../../actions/session_actions';
import SignUpForm from './signup_form';

const mSTP = ({ errors }) => {
  return {
    // errors: Object.values(errors.session),
    formType: 'signup',
  };
};

const mDTP = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
    demoLogin: () => dispatch(demoLogin()),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mSTP, mDTP)(SignUpForm);