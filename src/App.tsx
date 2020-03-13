import React, { Component} from 'react'
import WeatherData from './components/WeatherData'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'

interface Props {}
interface State {
  deviceSize: "isMobile" | "isDesktop"
}

export default class App extends Component<Props, State> {

  render() {
    
    return (
      <BrowserRouter>
          <ErrorBoundary>
            <WeatherData/>
          </ErrorBoundary>
      </BrowserRouter>
    )
  }
}