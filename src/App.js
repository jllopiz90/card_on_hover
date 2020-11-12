import React from 'react';
import sonImg from './assets/son.png';
import './App.css';
import CircularImg from './components/CircularImg';
import Footer from './components/Footer';
import sonInfo from './data/son_info.json';
import BarChartComponent from './components/BarChartComponent';
import { formatPointsForChart } from './utils/utils';

function App() {
  React.useEffect(() => {
    console.log(sonInfo);
  }, []);
  return (
    <>
      <div className="App">
        <CircularImg src={sonImg} alt="son" />
        <BarChartComponent
          data={formatPointsForChart(sonInfo)}
          width={300}
          height={200}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
