
import React, {CSSProperties} from 'react';
import WindDirection from './WindDirection';

interface Props{
  isDayMode:boolean,
  loadWeather: object
}

interface State{
  city: string
  language: string
  isLoaded: boolean
  weather: any
}

export default class WeatherTemp extends React.Component<Props, State> {
  constructor(props: Props){
    super(props)
    this.state = {
      city: "Göteborg",
      language: "se",
      isLoaded: false,
      weather: null
    }
  }

  async componentDidMount(){
    this.setState({ isLoaded: false })
    
    const response =  await fetch("http://api.openweathermap.org/data/2.5/weather?q="
    +this.state.city+"&appid=16da1da324d687a04c8aec0742e21c35&lang=se")
    
    const data = await response.json()
    // console.log("data under")
    // console.log(data)   //Console to see what's inside API response.
    this.setState({
      weather: data,
      isLoaded: true
    })

    console.log("WeatherTemp API call.")
  }

  kToCelsius(kelvinIn: number):string{
    return (kelvinIn - 273.15).toFixed(1);
  }

  render(){
      let weather;
      if(!this.state.isLoaded){
        weather = this.props.loadWeather;
      } else {
        weather = this.state.weather;
      }
      
      let weatherIconUrl: string;
      if(this.props.isDayMode){
        weatherIconUrl = require(`../asset/images/weatherIcons/${weather.weather[0].icon}.png`);
      } else {
        weatherIconUrl = require(`../asset/images/weatherIcons/NightMode/${weather.weather[0].icon}.png`);
      }

      const weatherIconALtDescription = "an icon of " + weather.weather[0].description;
      const tempInCelsius = this.kToCelsius(weather.main.temp);
      const tempFeelsLikeC = this.kToCelsius(weather.main.feels_like);
      const tempMin = this.kToCelsius(weather.main.temp_min);
      const tempMax = this.kToCelsius(weather.main.temp_max);

      return (
        <div style = {weatherTempStyle}>
          {/* <h2>{this.state.weather.name}</h2> */}
          <h2>{this.state.city}</h2>

          <div>
            <h3>Temp: {tempInCelsius}°C </h3>
            <h3>Känns som {tempFeelsLikeC}°C</h3>
            <h3>Dagens min {tempMin}°C, max {tempMax}°C</h3>
          </div>

          <img src={weatherIconUrl} alt={weatherIconALtDescription} style={weatherIconStyle}></img>
          
          <div>
          <h3>{weather.weather[0].description}</h3>
          <h3>Vind {weather.wind.speed} m/s, riktning {weather.wind.deg}°</h3>
          <WindDirection windDeg={weather.wind.deg} isDayMode={this.props.isDayMode} windStyle={windStyle} />
          </div>
        </div>
      );
  }
}

const weatherTempStyle:CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '50vh',
  textAlign: 'center'
}


const weatherIconStyle:CSSProperties = {
  width: "9rem"
}

const windStyle:CSSProperties = {
  padding: "0.5rem",
  width: "9rem",
}

