import React from 'react';

function Squats(props) {

    return (
      <div>
        <h2>Squats</h2>
        <h3>Count: {props.state.squats}</h3>
        <button onClick={() => props.dispatch({"type": "increment1"})}>Increase</button>
        <button onClick={() => props.dispatch({"type": "decrement1"})}>Decrease</button>
      </div>
    );
  }

  export default Squats;