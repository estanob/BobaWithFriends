import { connect } from 'react-redux';
import BobaTimes from './boba_times';

const mSTP = state => {
  const theMonths = [
    "January", "February", "March", "April", 
    "May", "June", "July", "August", 
    "September", "October", "November", "December"
  ];
  const currentMonth = new Date().getMonth();

  return {
    currentMonth: currentMonth,
    theMonths:theMonths,
  };
};

const mDTP = dispatch => {
  return {

  };
};

export default connect(mSTP, mDTP)(BobaTimes);