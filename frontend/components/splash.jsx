import React from 'react';

const Splash = () => {
  return (
    <div className="splash">
      <div className="splash-intro">
        <h1>Everyone can be a Friend</h1>
        <p>But you don't meet them when you're just at home looking at the screen all day!</p>
        <button className="signin-button">Let's Get Boba</button>
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
      <div className="why-boba">
        <h1>So why are thousands of people doing it?</h1>
        <div>
          <h2>It's awesome</h2>
          <p>Everyone at boba time is stepping a little out of their comfort zone. This makes it so much easier to actually learn something unexpected about the people around you. Because open minds are a prerequisite around here.</p>
        </div>
        <div>
          <h2>We won't meet otherwise</h2>
          <p>In all likelihood, our paths won’t cross for any reason. So often, we only meet people through work, school, or friends of friends. And even then, it’s questionable. So basically, we manufacture serendipity.</p>
        </div>
        <div>
          <h2>Make new friends!</h2>
          <p>And friends make everything better! Real humans are so much cooler than their Facebook or Instagram pictures. Boba time has real humans! #nofilter!</p>
        </div>
      </div>
    </div>
  )
}

export default Splash