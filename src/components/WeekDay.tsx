import React,{ CSSProperties } from 'react'
import WindDirection from './WindDirection'
import { WeatherResponse } from '../api-typings'

interface Props {
  weatherContent: WeatherResponse,
  isDayMode: boolean
}

export default function WeekDay(props:Props){
  let imgURL
  if(props.isDayMode){
    imgURL = require(`../asset/images/weatherIcons/${props.weatherContent.weather[0].icon}.png`)
  } else {
    imgURL = require(`../asset/images/weatherIcons/NightMode/${props.weatherContent.weather[0].icon}.png`)
  }

  const weekdayNameSE = ['Sön', 'Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör']
  const weekdayNum = new Date(props.weatherContent.dt * 1000).getDay()
  const weekdayName = weekdayNameSE[weekdayNum]

  return (
    <div style = {weatherCard}>
      <p>{weekdayName}</p>{" "}
      <img
        style = {imageStyling}
        src = {imgURL} 
        alt = {props.weatherContent.weather[0].description + " icon"}/>
      <p>
        {(props.weatherContent.main.temp - 273.15).toFixed(1)}°C
      </p>
      <WindDirection windDeg = {props.weatherContent.wind.deg} isDayMode = {props.isDayMode}/>
      <p>
          {props.weatherContent.wind.speed}m/s 
      </p>
    </div>
  )
}

const weatherCard: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}

const imageStyling: CSSProperties = {
  height: '3em',
}