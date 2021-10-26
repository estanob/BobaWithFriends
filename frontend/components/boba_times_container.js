import { connect } from 'react-redux';
import BobaTimes from './boba_times';

const mSTP = state => {
  const theMonths = [
    "Jan", "Feb", "Mar", "Apr", 
    "May", "Jun", "Jul", "Aug", 
    "Sep", "Oct", "Nov", "Dec"
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