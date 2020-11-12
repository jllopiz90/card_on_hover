import sonImg from './assets/son.png';
import './App.css';
import CircularImg from './components/CircularImg';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="App">
        <CircularImg src={sonImg} alt="son" />
      </div>
      <Footer />
    </>
  );
}

export default App;
