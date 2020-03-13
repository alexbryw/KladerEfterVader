import React, { Component} from 'react';
import Layout from '../components/Layout';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary';
import { WeatherResponse } from '../api-typings';

interface Props {
}
interface State {
    isLoadedForecast: boolean,
    isLoadedToday: boolean,
    weatherDataToday:WeatherResponse | undefined,
    weatherData: any,
}

export default class WeatherData extends Component<Props, State> {
    constructor(props: Props){
        super(props)
        this.state = {
        isLoadedToday: false,
        isLoadedForecast: false,
        weatherDataToday: undefined,
        weatherData: undefined,
        }
      }
    async componentDidMount() {
        this.setState({ isLoadedForecast: false });
        this.setState({ isLoadedToday: false });

        const responseToday  = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Göteborg&appid=16da1da324d687a04c8aec0742e21c35&lang=se");
        const tempDataWeatherToday = await responseToday.json();
        this.setState({
          weatherDataToday: tempDataWeatherToday,
          isLoadedToday: true
        })
        const response = await fetch("http://api.openweathermap.org/data/2.5/forecast?q=Göteborg&appid=16da1da324d687a04c8aec0742e21c35&lang=se");
        const data = await response.json();
        const tempDataWeather = data.list.filter((reading:any) => reading.dt_txt.includes("12:00:00"));
        const hour = new Date().getHours();
        if(hour > 12){
            tempDataWeather.pop();
        } else {
            tempDataWeather.shift();
        }
        this.setState({
          weatherData: tempDataWeather,
          isLoadedForecast: true,
        })
        console.log("WeatherData API call.")
    }

    render() {
    let weatherContent = [];
    if(!this.state.isLoadedToday || !this.state.isLoadedForecast){
        for(let i = 0; i < 5 ; i++){
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
        for(let i = 0; i < 4 ; i++){
            weatherContent.push(this.state.weatherData[i])
        }
    }

    return (
        <BrowserRouter>
            <ErrorBoundary>
                <Layout weatherContent={weatherContent}/>
            </ErrorBoundary>
        </BrowserRouter>
        );
  }
}