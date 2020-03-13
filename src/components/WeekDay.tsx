import React,{ CSSProperties } from 'react'
import WindDirection from './WindDirection'
import { WeatherResponse } from '../api-typings'


interface Props {
  weatherContent: WeatherResponse,
  isDayMode: boolean
}

export default class WeekDay extends React.Component<Props>{
    constructor(props:Props){
      super(props)
      this.state={}
    }

    render() {
      let imgURL
      if(this.props.isDayMode){
        imgURL = require(`../asset/images/weatherIcons/${this.props.weatherContent.weather[0].icon}.png`)
      } else {
        imgURL = require(`../asset/images/weatherIcons/NightMode/${this.props.weatherContent.weather[0].icon}.png`)
      }

      const weekdayNameSE = ['Sön', 'Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör']
      const weekdayNum = new Date(this.props.weatherContent.dt * 1000).getDay()
      const weekdayName = weekdayNameSE[weekdayNum]

      return (
          <div style={weatherCard}>
            <p>{weekdayName}</p>{" "}
            <img
              style={imageStyling}
              src={imgURL} 
              alt={this.props.weatherContent.weather[0].description + " icon"}/>
            <p>
              {(this.props.weatherContent.main.temp - 273.15).toFixed(1)}°C
            </p>
            <WindDirection windDeg={this.props.weatherContent.wind.deg} isDayMode={this.props.isDayMode}/>
            <p>
               {this.props.weatherContent.wind.speed}m/s 
            </p>
          </div>
      )
  }
}

const weatherCard: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}

const imageStyling: CSSProperties = {
  height: '3em',
}

