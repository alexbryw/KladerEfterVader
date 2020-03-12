import React,{ CSSProperties } from 'react';

interface Props {
  weatherContent: any,
  isDayMode: boolean
}

export default class WeatherFigure extends React.Component<Props>{
    constructor(props:Props){
      super(props);
      this.state={};
    }

    render() {
      const weather = this.props.weatherContent
      let weatherSlothIMG

      if(weather.dt === 32503683661){ 
        weatherSlothIMG = "DefaultSloth";
      } else if(!this.props.isDayMode){
        weatherSlothIMG = "GothSloth";
      } else if (weather.main.temp < 278){
        //temp in Kelvin, about 5+ C
        weatherSlothIMG = "ColdSloth";
      } else if (weather.weather[0].icon === "09d"){
        weatherSlothIMG = "WetSloth";
      } else if (weather.weather[0].icon === "09n"){
        weatherSlothIMG = "WetSloth";
      } else if (weather.weather[0].icon === "10d"){
        weatherSlothIMG = "WetSloth";
      } else if (weather.weather[0].icon === "10n"){
        weatherSlothIMG = "WetSloth";
      } else if (weather.weather[0].icon === "11d"){
        weatherSlothIMG = "WetSloth";
      } else if (weather.weather[0].icon === "11n"){
        weatherSlothIMG = "WetSloth";
      } else if (weather.main.temp > 293){
        //temp in Kelvin, about 20+ C
        weatherSlothIMG = "HotSloth";
      } else {
        weatherSlothIMG = "MildSloth";
      }

      let weatherSlothURL = require(`../asset/images/weatherSloths/${weatherSlothIMG}.png`)
      let imgURL
      if (this.props.isDayMode){
        imgURL = require(`../asset/images/weatherIcons/${weather.weather[0].icon}.png`);
      } else {
        imgURL = require(`../asset/images/weatherIcons/NightMode/${weather.weather[0].icon}.png`);
      }

      return (
          <div style={{...weatherFigureContainer}}>
            <img src={imgURL} alt={weather.weather[0].description + " Ikon"} style={weatherlogoStyle}/>
            <img src={weatherSlothURL} alt={weatherSlothIMG} style={weatherSlothStyle}/>
          </div>
      );
  }
} 

const weatherFigureContainer: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  position: 'relative',
  height: '60vh',
  width: '100%',
}

const weatherSlothStyle: CSSProperties = {
  height: '50%',
  zIndex: 3,
  margin: '0 0 4.5rem 0'
}

const weatherlogoStyle:CSSProperties = {
  height:"30%",
  position: 'absolute',
  top: '8vh',
  left: '10%'
}