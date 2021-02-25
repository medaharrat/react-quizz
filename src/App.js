import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import General from './Interfaces/General';

function App() {
  return (
      <div className="App">
        <Router>
          <General />
        </Router>
      </div>
  );
} 

export default App;
