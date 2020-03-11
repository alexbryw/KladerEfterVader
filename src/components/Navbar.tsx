import React, {CSSProperties} from 'react';
import NavItem from './NavItem'


interface Props{
  isDayMode:boolean;
  currentView: string;
  onViewSelected: (name:string) => void
}

export default function Navbar(props:Props){

      const navLabels = ['Prognos', 'Kläder']

      return (
        <div style = {navStyle}>
          <NavItem id = {"/"} name = {"Hem"} isDayMode = {props.isDayMode} onViewSelected = {props.onViewSelected}/>
          {navLabels.map((value) => <NavItem  isDayMode = {props.isDayMode} key ={value} id = {value} name = {value} onViewSelected = {props.onViewSelected}/>)}
        </div>
      );
    }



const navStyle: CSSProperties = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  textDecoration: 'none',
  position: 'absolute',
  bottom: 0,
  zIndex: 2
}