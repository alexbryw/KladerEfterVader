import React from 'react';
import DateTimePlace from './DateTimePlace'
import WeatherTeamp from './WeatherTemp';

export default function Home() {
  return (
    <div>
      <WeatherTeamp />
      <DateTimePlace />
    </div>
  );
}
