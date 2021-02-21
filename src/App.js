import './App.css';
import { Router } from 'react-router-dom'
import General from './Interfaces/General';
import history from './history';

function App() {
  return (
      <div className="App">
        <Router history={history}>
          <General />
        </Router>
      </div>
  );
} 

export default App;
