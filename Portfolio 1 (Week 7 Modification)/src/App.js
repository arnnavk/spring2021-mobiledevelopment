import Pushups from './components/Pushups';
import Squats from './components/Squats';
import Planks from './components/Planks';
import Crunches from './components/Crunches';
import './Style.css';
function App() {
  return (
    <div>
      <h1>Exercise Tracker</h1>
      <Pushups/>
      <Squats/>
      <Planks/>
      <Crunches/>
    </div>
  );
}

export default App;
