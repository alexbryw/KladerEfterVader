import React from 'react';
import DateTimeContainer from './DateTimeContainer'
import WeatherTemp from './WeatherTemp';

interface Props{
  isDayMode: boolean,
  loadWeather: object
}


export default function Home(props : Props) {
  return (
    <div>
      <WeatherTemp isDayMode={props.isDayMode} loadWeather={props.loadWeather}/>
      <DateTimeContainer />
    </div>
  );
}
