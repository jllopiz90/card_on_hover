import sonImg from './assets/son.png';
import './App.css';
import CircularImg from './components/CircularImg';

function App() {
  return (
    <div className="App">
      <CircularImg src={sonImg} alt="son" />      
    </div>
  );
}

export default App;
