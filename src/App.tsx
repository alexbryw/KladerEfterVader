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

  constructor(props: Props) {
    super(props)
    this.state = { deviceSize: this.calculateDeviceSize() }
  }

  updateDeviceSize = () => {
    this.setState({ deviceSize: this.calculateDeviceSize() })

  }

  calculateDeviceSize(): "isMobile" | "isDesktop" {
    if (window.innerWidth < 768) {
      return 'isMobile'
    } else {
      return 'isDesktop'
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDeviceSize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDeviceSize)
  }

  render() {
    console.log(this.state.deviceSize)
    return (
      <BrowserRouter>
        <ErrorBoundary>
          <Layout />
        </ErrorBoundary>
      </BrowserRouter>
    );
  }
}

export default App;
