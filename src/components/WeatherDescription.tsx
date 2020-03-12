import React, {CSSProperties} from 'react';
import { WeatherResponse } from '../api-typings';


interface Props {
  weatherContent: WeatherResponse,
  whatDayIsIt: string | undefined
}

export default class WeatherDescription extends React.Component<Props>{
    constructor(props:Props){
      super(props);
      this.state={};
    }
    render() {
      const weather:WeatherResponse = this.props.weatherContent;
      let whatClothes

      if(weather.dt === 32503683661){ 
        whatClothes = "Laddar...";
      } else if (weather.main.temp < 278){
        //temp in Kelvin, about 5+ C
        whatClothes = "Ta på dig varmt";
      } else if (weather.weather[0].icon === "09d"){
        whatClothes = "Ta på dig regnkläder.";
      } else if (weather.weather[0].icon === "09n"){
        whatClothes = "Ta på dig regnkläder.";
      } else if (weather.weather[0].icon === "10d"){
        whatClothes = "Ta på dig regnkläder.";
      } else if (weather.weather[0].icon === "10n"){
        whatClothes = "Ta på dig regnkläder.";
      } else if (weather.weather[0].icon === "11d"){
        whatClothes = "Ta på dig regnkläder.";
      } else if (weather.weather[0].icon === "11n"){
        whatClothes = "Ta på dig regnkläder.";
      } else if (weather.main.temp > 293){
        //temp in Kelvin, about 20+ C
        whatClothes = "Klä dig svalt, glöm inte hatt.";
      } else {
        whatClothes = "Inte varmt eller kallt, glöm inte jacka.";
      }

      return (
          <div style = {textStyle}>
            <p>{this.props.whatDayIsIt} är det {(weather.main.temp - 273.15).toFixed(1)} ° grader och {weather.weather[0].description}</p>
            <p>{whatClothes}</p>
          </div>
      );
  }
}

const textStyle:CSSProperties = {
  display: 'flex',
  height: '10%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  marginBottom: '1rem',
  textAlign: 'center'
}