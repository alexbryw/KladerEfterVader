import React, {CSSProperties} from 'react'
import DateTimeContainer from './DateTimeContainer'
import WeatherTemp from './WeatherTemp'
import { WeatherResponse } from '../api-typings'
import ErrorBoundary from './ErrorBoundary'

interface Props{
  isDayMode: boolean,
  weatherContent: WeatherResponse[],
}

export default function Home(props : Props) {
  return (
    <div style = {homeGridItem}>
      <DateTimeContainer />
      <ErrorBoundary>
        <WeatherTemp isDayMode = {props.isDayMode} weatherContent = {props.weatherContent}/>  
      </ErrorBoundary>  
    </div>
  )
}

const homeGridItem: CSSProperties = {
  gridArea: 'home',
  height: '95vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}
