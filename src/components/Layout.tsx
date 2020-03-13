import React, {CSSProperties}from 'react'
import MainView from './MainView'
import Navbar from './Navbar'
import DayNightMode from './DayNightMode'
import ErrorBoundary from './ErrorBoundary'
import Home from './Home'
import WeekOverview from './WeekOverview'
import Clothes from './Clothes'
import { WeatherResponse } from '../api-typings'

interface Props{
}

interface State{
  isDayMode: boolean,
  // DO WE ACTUALLY STILL NEED THIS? Is isDayMode enough?
  buttonText: string,
  modeStyle: React.CSSProperties,
  deviceSize: "isMobile" | "isDesktop",
  isLoaded: boolean,
  weatherDataToday:WeatherResponse | undefined,
  weatherData: any,
}

export default class Layout extends React.Component <Props, State>{
  constructor(props:Props){
    super(props)
    this.state = {
      isDayMode: true,
      buttonText: 'Dag',
      modeStyle: mainDayStyle,
      deviceSize: this.calculateDeviceSize(),
      isLoaded: false,
      weatherDataToday: undefined,
      weatherData: undefined,
    }
  }


  toggleDayNightMode = () => {
    this.setState({isDayMode:!this.state.isDayMode})

    if (this.state.isDayMode){
      this.setState({buttonText: "Natt"})
      this.setState({modeStyle: mainNigthStyle})
    }
    else{
      this.setState({buttonText:"Dag"})
      this.setState({modeStyle: mainDayStyle})
    }
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
    this.weatherAPICall();
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
        const hour = new Date().getHours();
        if(hour > 12){
            tempDataWeather.pop();
        } else {
            tempDataWeather.shift();
        }
        this.setState({
            weatherDataToday: data.list[0],
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

  loadWeatherContent(){
    let weatherContent = []
    if(!this.state.isLoaded){
      for(let i = 0 ; i < 5 ; i++){
      weatherContent.push({
          "dt":32503683661,
          "main":{
              "temp":273.15,
              "feels_like":273.15,
              "temp_min":273.15,
              "temp_max":273.15,
              "pressure":1000,
              "sea_level":1000,
              "grnd_level":1000,
              "humidity":100,
              "temp_kf":0
          },"weather":[{
              "id":800,
              "main":"Weather",
              "description":"väder",
              "icon":"load"
          }],"clouds":{
              "all":0
          },"wind":{
              "speed":0.00,
              "deg":123},
              "sys":{
              "pod":"n"
          },"dt_txt":"3000-01-01 01:01:01"
      })} 
  } else {
      weatherContent.push(this.state.weatherDataToday)
      for(let i = 0 ; i < 4 ; i++){
          weatherContent.push(this.state.weatherData[i])
      }
    }
    return weatherContent
  }

  render(){
    let weatherContent = this.loadWeatherContent()

    console.log(this.state.deviceSize)
   
    if(this.state.deviceSize === "isMobile"){
      return (
        <div style = {mainStyle}>
            <ErrorBoundary>
            <div style = {{...styleMobile, ...this.state.modeStyle}}>
              <MainView isDayMode = {this.state.isDayMode} weatherContent={weatherContent}/>
            </div>
            </ErrorBoundary>
            <DayNightMode isDayMode = {this.state.isDayMode} buttonText = {this.state.buttonText} onToggleMode = {this.toggleDayNightMode}/>
            <Navbar isDayMode = {this.state.isDayMode} />
        </div>
      )
    }

    else{
      return (
        <div style = {{...this.state.modeStyle, ...gridLayoutDesktop, ...mainStyle, ...styleDesktop}}>
            <ErrorBoundary>
              <Home isDayMode={this.state.isDayMode} weatherContent={weatherContent}/>
            </ErrorBoundary>
            <ErrorBoundary>
              <WeekOverview isDayMode = {this.state.isDayMode} weatherContent={weatherContent}/>
            </ErrorBoundary>
            <ErrorBoundary>
              <Clothes isDayMode = {this.state.isDayMode} weatherContent={weatherContent}/>
            </ErrorBoundary>
            <DayNightMode isDayMode = {this.state.isDayMode} buttonText = {this.state.buttonText} onToggleMode = {this.toggleDayNightMode}/>
        </div>
      )
    }

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