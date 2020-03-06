import React, {CSSProperties}from 'react';
import MainView from './MainView'
import Navbar from './Navbar'
import DayNightMode from './DayNightMode'

export default function Layout() {
  return (
    <div style = {mainDayStyle}>
        <MainView />
        <DayNightMode />
        <Navbar />
    </div>
  );
}

const mainDayStyle:CSSProperties = {
  backgroundColor: 'lightblue',
  height: '100vh',
  width: '100%',
  position: 'relative'
}
