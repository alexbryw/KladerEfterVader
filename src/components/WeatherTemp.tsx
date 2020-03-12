//HomeScreen component that shows city nam, Weather icon, temperature and wind direction. 
//Fetched from OpenWeatherMap API. 
import React, {CSSProperties} from 'react';
import WindDirection from './WindDirection';
import { WeatherResponse } from '../api-typings';

interface Props{
  isDayMode:boolean,
  loadWeather: object //TODO change to WeatherResponce type.
  weatherContent: WeatherResponse[]
}

interface State{
  city: string
  isLoaded: boolean
  weather: WeatherResponse | undefined
}

export default class WeatherTemp extends React.Component<Props, State> {
  constructor(props: Props){
    super(props)
    this.state = {
      city: "Göteborg",
      isLoaded: false,
      weather: undefined
    }
  }

  //Use async so the code will wait for the slow fetch response from the internet.
  async componentDidMount(){
    // Openweathermap API url.
    const weatherAPIUrl: string = "http://api.openweathermap.org/data/2.5/weather?q="
    +this.state.city+"&appid=16da1da324d687a04c8aec0742e21c35&lang=se"

    try {
      this.setState({ isLoaded: false }) //TO know when API data has loaded.
      const response =  await fetch(weatherAPIUrl)
      const data = await response.json()

      // console.log("data under")
      // console.log(data)   //TODO remove later. Console to see what's inside API response.
      
      if(data.cod === 200){ //Code 200 means good response.
        this.setState({
          weather: data as WeatherResponse,
          isLoaded: true
        })
      } else if(data.cod != null) {   //print error code if there is a code. Test with wrong city name.
        console.log("API error code: " + data.cod) 
        console.log(data.message)
      }
  
      // console.log("WeatherTemp API call.") //TODO remove later.
      
    } catch (error) {   //Show if other errors happen like fail to fetch. Test with wrong url.
      console.log("error from WeatherTemp API - error message below:") 
      console.log(error)
    }
  }

  // Return kelvin to celsius.
  kToCelsius(kelvinIn: number):string{
    return (kelvinIn - 273.15).toFixed(1);
  }

  //Returns real API response or fake placeholder data from props until API is ready.
  useAPIorPlaceholderData():WeatherResponse{
    let weather: WeatherResponse
    if(!this.state.isLoaded){
      weather = this.props.loadWeather as WeatherResponse;
    } else {
      weather = this.state.weather as WeatherResponse;
    }
    return weather;
  }

  //Change weather icon file path if props is NightMode or not.
  setIconDayNightModeUrl(weather: WeatherResponse): string{
    let weatherIconUrl: string;
    if(this.props.isDayMode){
      weatherIconUrl = require(`../asset/images/weatherIcons/${weather.weather[0].icon}.png`);
    } else {
      weatherIconUrl = require(`../asset/images/weatherIcons/NightMode/${weather.weather[0].icon}.png`);
    }
    return weatherIconUrl;
  }

  render(){
    const weather = this.useAPIorPlaceholderData();
    const weatherIconUrl = this.setIconDayNightModeUrl(weather);
    const weatherIconALtDescription = "an icon of " + weather.weather[0].description;
    const tempInCelsius = this.kToCelsius(weather.main.temp);
    const tempFeelsLikeC = this.kToCelsius(weather.main.feels_like);

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
    );
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


