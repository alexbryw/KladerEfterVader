import React from 'react';

interface Props {
  weatherContent: any
}

export default class WeatherFigure extends React.Component<Props>{
    constructor(props:Props){
      super(props);
      this.state={};
    }

    render() {
      const weather = this.props.weatherContent
      let weatherSlothIMG

      if (weather.main.temp < 278){
        //temp in Kelvin, about 5+ C
        weatherSlothIMG = "ColdSloth";
      } else if (weather.weather[0].icon === "09d"){ // problem with ||
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

      let weatherSlothURL = `./images/weatherSloths/${weatherSlothIMG}.png`

      return (
          <div>
            <img src={weatherSlothURL} alt={weatherSlothIMG}/>
            <p>{weather.weather[0].icon}</p>
          </div>
      );
  }
} 