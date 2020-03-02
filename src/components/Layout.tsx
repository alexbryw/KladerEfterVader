import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import MainView from './MainView'
import Navbar from './Navbar'

function App() {
  return (
    <div>
        <h1>Layout</h1>
        <MainView />
        <Navbar />
    </div>
  );
}

export default App;