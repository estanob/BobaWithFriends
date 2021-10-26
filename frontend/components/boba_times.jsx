import React from 'react';

const BobaTimes = props => {
  let { theMonths, currentMonth } = props;
  const theMonth = theMonth[currentMonth + 1];
  console.log("Current Month:", currentMonth)
  console.log("Boba Times Props:", props)
  return (
    <div>
      <h1>Hello</h1>
      <p>Click on an event to see more information, Apply to be a host, or sign up if you haven't already.</p>
      <p>{`Boba Times in ${theMonth}`}</p>
    </div>
  )
};

export default BobaTimes;