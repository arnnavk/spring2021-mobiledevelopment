import React, {useState} from 'react';

function Squats() {
    const [sets, setSets] = useState(0);
    const [reps, setReps] = useState(0);
    return (
      <div>
        <h2>Squats</h2>
        <h3>Sets: {sets}</h3>
        <h3>Reps: {reps}</h3>
        <button onClick={() => setSets(sets + 1)}>Sets</button>
        <button onClick={() => setReps(reps + 1)}>Reps</button>
        <button onClick={() => setSets(0) + setReps(0)}>Reset Counter</button>
      </div>
    );
  }

  export default Squats;