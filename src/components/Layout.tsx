import React from 'react';
import MainView from './MainView'
import Navbar from './Navbar'
import DayNightMode from './DayNightMode'

function App() {
  return (
    <div>
        <MainView />
        <DayNightMode />
        <Navbar />
    </div>
  );
}

export default App;