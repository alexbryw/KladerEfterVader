import React from 'react';
import MainView from './MainView'
import Navbar from './Navbar'
import DayNightMode from './DayNightMode'

export default function Layout() {
  return (
    <div>
        <MainView />
        <DayNightMode />
        <Navbar />
    </div>
  );
}
