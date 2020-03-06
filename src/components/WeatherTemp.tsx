import React from 'react';

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
    +this.state.city+"&lang="+this.state.language+"&appid=16da1da324d687a04c8aec0742e21c35")
    
    const data = await response.json()
    console.log("data under")
    console.log(data)   //Console to see what's inside API response.
    this.setState({
      weather: data,
      isLoaded: true
    })
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
    const weatherIconUrl = "http://openweathermap.org/img/wn/"+ this.state.weather.weather[0].icon +"@2x.png";
    const weatherIconALtDescription = "an icon of " + this.state.weather.weather[0].description;
    const tempInCelsius =  (this.state.weather.main.temp - 273.15).toFixed(1);
    const tempFeelsLikeC =  (this.state.weather.main.feels_like - 273.15).toFixed(1);
      return (
        <div className="WeatherTemp">
          {/* <h2>{this.state.weather.name}</h2> */}
          <h2>{this.state.city}</h2>
          <h3>Temp: {tempInCelsius}°C </h3>
          <h3>Känns som {tempFeelsLikeC}</h3>
          <img src={weatherIconUrl} alt={weatherIconALtDescription}></img>
          <h3>{this.state.weather.weather[0].description}</h3>
          <h3>Vind {this.state.weather.wind.speed} m/s </h3>
          <h3>Riktning {this.state.weather.wind.deg}°</h3>
        </div>
      );
    }
  }
}
