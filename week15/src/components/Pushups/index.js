import React from 'react';

function Pushups(props) {

    return (
      <div>
        <h2>Pushups</h2>
        <h3>Count: {props.state.pushups}</h3>
        <button onClick={() => props.dispatch({"type": "increment2"})}>Increase</button>
        <button onClick={() => props.dispatch({"type": "decrement2"})}>Decrease</button>
      </div>
    );
  }

  export default Pushups;