//HomeScreen component that shows city nam, Weather icon, temperature and wind direction. 
//Fetched from OpenWeatherMap API. 
import React, {CSSProperties} from 'react'
import WindDirection from './WindDirection'
import { WeatherResponse } from '../api-typings'

interface Props{
  isDayMode:boolean,
  weatherContent: WeatherResponse[]
}

interface State{
  city: string
}

export default class WeatherTemp extends React.Component<Props, State> {
  constructor(props: Props){
    super(props)
    this.state = {
      city: "Göteborg"
    }
  }

  // Return kelvin to celsius.
  kToCelsius(kelvinIn: number):string{
    return (kelvinIn - 273.15).toFixed(1)
  }

  //Change weather icon file path if props is NightMode or not.
  setIconDayNightModeUrl(weather: WeatherResponse): string{
    let weatherIconUrl: string
    if(this.props.isDayMode){
      weatherIconUrl = require(`../asset/images/weatherIcons/${weather.weather[0].icon}.png`)
    } else {
      weatherIconUrl = require(`../asset/images/weatherIcons/NightMode/${weather.weather[0].icon}.png`)
    }
    return weatherIconUrl
  }

  render(){
    const weather = this.props.weatherContent[0]
    const weatherIconUrl = this.setIconDayNightModeUrl(weather)
    const weatherIconALtDescription = "an icon of " + weather.weather[0].description
    const tempInCelsius = this.kToCelsius(weather.main.temp)
    const tempFeelsLikeC = this.kToCelsius(weather.main.feels_like)

    return (
      <div style = {weatherTempStyle}>
        <img src={weatherIconUrl} alt={weatherIconALtDescription} style={weatherIconStyle}></img>
        <h2>{this.state.city}</h2>
        <div>
          <h3>Temp: {tempInCelsius}°C </h3>
          <h5>Känns som {tempFeelsLikeC}°C</h5>
          <div style = {windWrap}>
            <h5>Vind {weather.wind.speed} m/s</h5>
            <WindDirection windDeg={weather.wind.deg} isDayMode={this.props.isDayMode}/>
          </div>
        </div>
      </div>
    )
  }
}

const weatherTempStyle:CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  height: '60vh',
  textAlign: 'center'
}

const weatherIconStyle:CSSProperties = {
  width: "9rem"
}

const windWrap: CSSProperties = {
  display:'flex',
  alignItems: 'center',
  justifyContent: 'space-around'
}


