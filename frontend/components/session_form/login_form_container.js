import React from 'react';
import { connect } from 'react-redux';
import { clearErrors, demoLogin, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => {
  return {
    // errors: Object.values(errors.session),
    formType: 'login',
  };
};

const mDTP = dispatch => {
  return {
    login: user => dispatch(login(user)),
    demoLogin: () => dispatch(demoLogin()),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mSTP, mDTP)(SessionForm);