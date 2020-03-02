import React, {CSSProperties} from 'react';
import NavItem from './NavItem'

export default function Navbar() {
  const navLabels = ['Hem', 'Veckan', 'Kläder']

  return (
    <div style = {navStyle}>
      {navLabels.map((value) => <NavItem key ={value} id = {value}/>)}
    </div>
  );
}

const navStyle: CSSProperties = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  textDecoration: 'none'
}