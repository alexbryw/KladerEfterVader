import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'

interface Props {}
interface State {
  deviceSize: "isMobile" | "isDesktop"
}

class App extends Component<Props, State> {

  render() {
    
    return (
      <BrowserRouter>
        <ErrorBoundary>
          <Layout/>
        </ErrorBoundary>
      </BrowserRouter>
    );
  }
}

export default App;
