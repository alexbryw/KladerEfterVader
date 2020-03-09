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

      if(!this.props.isDayMode){
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
            <img src={imgURL} alt={weather.weather[0].description + " Ikon"} style={{...weatherlogoStyle}}/>
            <img src={weatherSlothURL} alt={weatherSlothIMG} style={{...weatherSlothStyle}}/>
          </div>
      );
  }
} 

const weatherFigureContainer: CSSProperties = {
  height:"15em",
}


const weatherSlothStyle: CSSProperties = {
  height:"15em",
  position: "absolute",
  left: "2em",
}

const weatherlogoStyle:CSSProperties = {
  height:"7em",
  position: "absolute",
  left: "1em",
}