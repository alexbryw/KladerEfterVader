import React, { Component} from 'react'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import Layout from './components/Layout'

interface Props {}

export default class App extends Component<Props> {
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