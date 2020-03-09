import React, {CSSProperties} from 'react';
import DateTimeContainer from './DateTimeContainer'
import WeatherTeamp from './WeatherTemp';

export default function Home() {
  return (
    <div style = {homeGridItem}>
      <WeatherTeamp />
      <DateTimeContainer />
    </div>
  );
}

const homeGridItem: CSSProperties = {
  gridArea: 'home'
}
