import React, {CSSProperties} from 'react'
import WeekDay from './WeekDay'
import { WeatherResponse } from '../api-typings'

interface Props {
  isDayMode:boolean,
  weatherContent: WeatherResponse[],
}

export default function WeekOverview(props:Props){
  return(
    <div style={{...weatherListContainer, ...weekOverviewGridItem}}>
      {props.weatherContent.map((weatherContent:WeatherResponse, index:number) =>
      <WeekDay weatherContent = {weatherContent} key = {index} isDayMode={props.isDayMode}/>
    )}
  </div>
  )
}

const weatherListContainer: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  height: '75vh',
  justifyContent: 'space-around',
  margin: '10vh 1rem 0 1rem'
}

const weekOverviewGridItem: CSSProperties = {
  gridArea: 'week'
}