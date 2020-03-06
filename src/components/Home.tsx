import React from 'react';
import DateTimeContainer from './DateTimeContainer'
import WeatherTeamp from './WeatherTemp';

export default function Home() {
  return (
    <div>
      <WeatherTeamp />
      <DateTimeContainer />
    </div>
  );
}
