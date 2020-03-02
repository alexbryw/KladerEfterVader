import React from 'react';
import NavItem from './NavItem'

export default function Navbar() {
  const navLabels = ['Hem', 'Veckans Väder', 'Kläder']

  return (
    <div>
      {navLabels.map((value) => <NavItem key ={value} id = {value}/>)}
    </div>
  );
}

