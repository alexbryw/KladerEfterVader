import React, {CSSProperties}from 'react'
import Navbar from './Navbar'
import DayNightMode from './DayNightMode'
import ErrorBoundary from './ErrorBoundary'
import Home from './Home'
import WeekOverview from './WeekOverview'
import Clothes from './Clothes'
import { WeatherResponse, placeholderWeatherResponse } from '../api-typings'
import {Switch, Route} from 'react-router-dom'

interface Props{
}

interface State{
  isDayMode: boolean,
  buttonAltText: string,
  modeStyle: React.CSSProperties,
  deviceSize: "isMobile" | "isDesktop",
  isLoaded: boolean,
  weatherDataToday: WeatherResponse | undefined,
  weatherData: WeatherResponse[],
  activeView: string
}

export default class Layout extends React.Component <Props, State>{
  constructor(props:Props){
    super(props)
    this.state = {
      isDayMode: true,
      buttonAltText: 'Dag',
      modeStyle: mainDayStyle,
      deviceSize: this.calculateDeviceSize(),
      isLoaded: false,
      weatherDataToday: undefined,
      weatherData: [],
      activeView: '/'
    }
  }
  toggleDayNightMode = () => {
    this.setState({isDayMode:!this.state.isDayMode})

    if (this.state.isDayMode){
      this.setState({buttonAltText: "Natt"})
      this.setState({modeStyle: mainNigthStyle})
    }
    else{
      this.setState({buttonAltText:"Dag"})
      this.setState({modeStyle: mainDayStyle})
    }
  }
  setView = (id: string) => {
    this.setState({ activeView: id})
  }
  
  updateDeviceSize = () => {
    this.setState({ deviceSize: this.calculateDeviceSize() })
  }

  calculateDeviceSize(): "isMobile" | "isDesktop" {
    if (window.innerWidth < 1000) {
      return 'isMobile'
    } else {
      return 'isDesktop'
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDeviceSize);
    this.weatherAPICall()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDeviceSize)
  }

  async weatherAPICall(){
    const weatherAPIUrl = 
    "http://api.openweathermap.org/data/2.5/forecast?q=Göteborg"+
    "&appid=16da1da324d687a04c8aec0742e21c35&lang=se"

    try {
      this.setState({ isLoaded: false });
      const response = await fetch(weatherAPIUrl);
      const data = await response.json();
      console.log(data)

      if(data.cod === "200"){ //Code 200 means good response.

        const tempDataWeather: WeatherResponse[] = data.list.filter((reading: WeatherResponse) => reading.dt_txt.includes("12:00:00"));
        console.log(tempDataWeather[0])
        const hour = new Date().getHours();
        if(hour > 12){
            tempDataWeather.pop();
        } else {
            tempDataWeather.shift();
        }
        this.setState({
            weatherDataToday: data.list[0] as WeatherResponse,
            weatherData: tempDataWeather,
            isLoaded: true,
        })
        console.log("WeatherData API call.")

      } else if(data.cod != null) {   //print error code if there is a code. Test with wrong city name.
        console.log("API error code response: " + data.cod) 
        console.log(data.message)
      }

    } catch (error) { // Show error if fetch fails. Test with wrong Url.
      console.log("API fetch error below:")
      console.log(error)
    }
  }

  loadWeatherContent = () =>{
    let weatherContent: WeatherResponse[] = []
    if(!this.state.isLoaded){
      for(let i = 0 ; i < 5 ; i++){
      weatherContent.push(placeholderWeatherResponse)} 
    } else {
      weatherContent.push(this.state.weatherDataToday as WeatherResponse)
      
      for(let i = 0 ; i < 4 ; i++){
          weatherContent.push(this.state.weatherData[i] as WeatherResponse)
        }
    }
    return weatherContent
  }

  get homeRoute(){
    if(this.state.deviceSize === 'isMobile'){
      return(
        <>
          <div style = {{...styleMobile, ...this.state.modeStyle}}>
            <Route exact path = '/' render={() => 
              <ErrorBoundary>
                <Home {...this.props}
                  isDayMode={this.state.isDayMode}
                  weatherContent={this.loadWeatherContent()}
                />
              </ErrorBoundary>}
            /> 

            <Route path = '/Prognos' render={() => 
             <ErrorBoundary> 
                <WeekOverview {...this.props}  
                  isDayMode={this.state.isDayMode}
                  weatherContent={this.loadWeatherContent()}
                />
              </ErrorBoundary>}
            />

            <Route path = '/Kläder' render={() => 
              <ErrorBoundary> 
                <Clothes
                  {...this.props}
                  isDayMode={this.state.isDayMode}
                  weatherContent={this.loadWeatherContent()}
                />
              </ErrorBoundary>} 
            />
        </div>
        <Navbar isDayMode = {this.state.isDayMode} onViewSelected = {this.setView} activeView = {this.state.activeView}/>
      </>
    )
    }
      else {  
        return(
          <Route path = '/' render={() => 
            <div style = {{...this.state.modeStyle, ...gridLayoutDesktop, ...styleDesktop}}>
              <ErrorBoundary>
                <Home isDayMode={this.state.isDayMode} weatherContent={this.loadWeatherContent()}/>
              </ErrorBoundary>
              <ErrorBoundary>
                <WeekOverview isDayMode = {this.state.isDayMode} weatherContent={this.loadWeatherContent()}/>
              </ErrorBoundary>
              <ErrorBoundary>
                <Clothes isDayMode = {this.state.isDayMode} weatherContent={this.loadWeatherContent()}/>
              </ErrorBoundary>
            </div>
          }/>
         )     
      }
  }

  render(){
    return(
      <Switch>
        <>
          <div style = {mainStyle}>
            {this.homeRoute}
            <DayNightMode isDayMode = {this.state.isDayMode} buttonText = {this.state.buttonAltText} onToggleMode = {this.toggleDayNightMode}/>
          </div>
        </>
      </Switch>
    )
  }
}

const mainStyle:CSSProperties = {
  height: '98vh',
  width: '100%',
  position: 'relative',
}

const mainDayStyle:CSSProperties = {
  backgroundColor: '#b3d9ff',
  color: 'black'
}

const mainNigthStyle:CSSProperties = {
  backgroundColor: '#000033',
  color: '#ffffcc'
}

const styleMobile:CSSProperties = {
  borderTop: '3px solid black',
  borderRight: '3px solid black',
  borderLeft: '3px solid black',
  borderTopLeftRadius: '25px',
  borderTopRightRadius: '25px',
  height: '88%',
  display: 'flex',
  justifyContent: 'center',
}

const styleDesktop:CSSProperties = {
  border: '3px solid black',
  borderRadius: '25px',
}


const gridLayoutDesktop: CSSProperties = {
  display: 'grid',
  width: '100%',
  height: '100%',
  gridTemplateColumns: '35% 25% 40%',
  gridTemplateAreas: 
  '"home week clothes"',
}