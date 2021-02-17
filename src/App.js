import './App.css';
import { BrowserRouter } from 'react-router-dom'
import General from './Interfaces/General';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <General />
        </BrowserRouter>
      </div>
  );
} 

export default App;
