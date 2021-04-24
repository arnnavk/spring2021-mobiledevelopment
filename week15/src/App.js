import React, { useReducer } from 'react';
import Pushups from './components/Pushups';
import Squats from './components/Squats';
import {state, reducer} from './components/ApplicationState';
function App() {

  const [currentState, dispatch] = useReducer(reducer, state);

  return (
    <div>
      <Pushups state={currentState} dispatch= {dispatch}/>
      <Squats state={currentState} dispatch= {dispatch}/>
    </div>
  );
}

export default App;
