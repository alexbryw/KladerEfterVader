import React from 'react';

interface Props{}
interface State{
  city: string
  isLoaded: boolean
  weather: any
}

export default class WeatherTeamp extends React.Component<Props, State> {
  constructor(props: Props){
    super(props)
    this.state = {
      city: "Göteborg",
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


  render(){
    if(!this.state.isLoaded){
      return(
        <div><h1>Loading...</h1></div>
      )
    }
    else {
      return (
        <div>
          <h3>From WeatherTemp</h3>
          <h2>{this.state.weather.name}</h2>
          <h3>{(this.state.weather.main.temp - 273.15).toFixed(1)}°C</h3>
          <h3>{this.state.weather.weather[0].main}</h3>
          <h3>{this.state.weather.weather[0].description}</h3>
          <h3>{this.state.weather.wind.speed} m/s {this.state.weather.wind.deg}°</h3>
        </div>
      );
    }
  }
}