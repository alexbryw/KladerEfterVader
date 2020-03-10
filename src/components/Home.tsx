import React, {CSSProperties} from 'react';
import DateTimeContainer from './DateTimeContainer'
import WeatherTeamp from './WeatherTemp';

export default function Home() {
  return (
    <div style = {homeGridItem}>
      <DateTimeContainer />
      <WeatherTeamp />   
    </div>
  );
}

const homeGridItem: CSSProperties = {
  gridArea: 'home',
  height: '95vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}
