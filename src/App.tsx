import React, { Component} from 'react';
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import Layout from './components/Layout';

interface Props {}
interface State {
  deviceSize: "isMobile" | "isDesktop"
}

export default class App extends Component<Props, State> {

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