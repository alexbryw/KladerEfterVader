import React, {CSSProperties} from 'react'
import { WeatherResponse } from '../api-typings'

interface Props {
  weatherContent: WeatherResponse,
  whatDayIsIt: string | undefined
}

export default class WeatherDescription extends React.Component<Props>{
    constructor(props:Props){
      super(props)
      this.state={}
    }

    //Tells user how to dress themselves
    pickClothesText(weather:WeatherResponse){
      let whatClothes;
      if(weather.dt === 32503683661){ 
        // dt is a date year 3000 ico slow API
        whatClothes = "Laddar..."
      } else if (weather.main.temp < 278){
        //temp in Kelvin, about 5+ C
        whatClothes = "Ta på dig varmt"
      } else if  (weather.weather[0].icon === "09d" || 
                  weather.weather[0].icon === "09n" || 
                  weather.weather[0].icon === "10d" || 
                  weather.weather[0].icon === "10n" || 
                  weather.weather[0].icon === "11n" || 
                  weather.weather[0].icon === "11d"){
        whatClothes = "Ta på dig regnkläder."
      } else if (weather.main.temp > 293){
        //temp in Kelvin, about 20+ C
        whatClothes = "Klä dig svalt, glöm inte hatt."
      } else {
        whatClothes = "Inte varmt eller kallt, glöm inte jacka."
      }
      return whatClothes
    }

    render() {
      const weather:WeatherResponse = this.props.weatherContent
      const whatClothes = this.pickClothesText(weather)

      return (
          <div style = {textStyle}>
            <p>{this.props.whatDayIsIt} är det {(weather.main.temp - 273.15).toFixed(1)} ° grader och {weather.weather[0].description}</p>
            <p>{whatClothes}</p>
          </div>
      )
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