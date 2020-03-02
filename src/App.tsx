import React from 'react';
import './App.css';
import Layout from './components/Layout'
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <h1>hej</h1>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
