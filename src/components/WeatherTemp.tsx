import React from 'react';
import './WeatherTemp.css';

interface Props{}
interface State{
  city: string
  language: string
  isLoaded: boolean
  weather: any
}

export default class WeatherTeamp extends React.Component<Props, State> {
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
  }

  kToCelsius(kelvinIn: number):string{
    return (kelvinIn - 273.15).toFixed(1);
  }

  render(){
    if(!this.state.isLoaded){
      return(
        <div>
          <h1>Loading... </h1>
          <h1>WeatherTemp</h1>
        </div>
      )
    }
    else {
    const weatherIconUrl = require(`../asset/images/weatherIcons/${this.state.weather.weather[0].icon}.png`)

    const weatherIconALtDescription = "an icon of " + this.state.weather.weather[0].description;
    const tempInCelsius = this.kToCelsius(this.state.weather.main.temp);
    const tempFeelsLikeC = this.kToCelsius(this.state.weather.main.feels_like);
    const tempMin = this.kToCelsius(this.state.weather.main.temp_min);
    const tempMax = this.kToCelsius(this.state.weather.main.temp_max);

    // Maybe add sunset and sunrise later, fix timezones, could also be wrong timestamp from weatherAPI
    // const sunrise = new Date(this.state.weather.sys.sunrise)
    // const sunset = new Date(this.state.weather.sys.sunset)

    // const formattedSunrise = sunrise.toLocaleTimeString();
    // const formattedSunset= sunset.toLocaleTimeString();

      return (
        <div className="WeatherTemp">
          {/* <h2>{this.state.weather.name}</h2> */}
          <h2>{this.state.city}</h2>
          <h3>Temp: {tempInCelsius}°C </h3>
          <h3>Känns som {tempFeelsLikeC}°C</h3>
          <h3>Dagens min {tempMin}°C, max {tempMax}°C</h3>
          <img src={weatherIconUrl} alt={weatherIconALtDescription} width="120"></img>
          <h3>{this.state.weather.weather[0].description}</h3>
          <h3>Vind {this.state.weather.wind.speed} m/s, riktning {this.state.weather.wind.deg}°</h3>
          {/* <h3>Soluppgång {formattedSunrise}  nedgång {formattedSunset} </h3> */}
        </div>
      );
    }
  }
}

