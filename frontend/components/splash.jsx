import React from 'react';

const Splash = () => {
  return (
    <div className="splash">
      <h1>Hello World</h1>
      <div className="splash-intro">
        <h1>Everyone can be a Friend</h1>
        <p>But you don't meet them when you're just at home looking at the screen all day!</p>
        <button>Let's Get Boba</button>
      </div>
      <div className="splash-explanation">
        <div>
          <h3>Show up for boba time</h3>
          <p>You and a few others join a host at a cafe.</p>
        </div>
        <div>
          <h3>Have a real conversation</h3>
          <p>You talk for two hours about anything.</p>
        </div>
        <div>
          <h3>See what happens</h3>
          <p>That's it. No strings attached.</p>
        </div>
      </div>
    </div>
  )
}

export default Splash