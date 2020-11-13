import React from 'react';
import sonImg from './assets/son.png';
import './App.css';
import CircularImg from './components/CircularImg';
import Footer from './components/Footer';
import sonInfo from './data/son_info.json';
import CardOnHover from './components/CardOnHover';

function App() {
  
  return (
    <>
      <div className="App">
        <CardOnHover data={sonInfo}>
          <CircularImg src={sonImg} alt="son" />
        </CardOnHover>
      </div>
      <Footer />
    </>
  );
}

export default App;
