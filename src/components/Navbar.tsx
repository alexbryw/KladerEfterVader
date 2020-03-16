import React, {CSSProperties} from 'react'
import NavItem from './NavItem'

interface Props{
  isDayMode:boolean,
  onViewSelected: (id: string) => void,
  activeView: string
}

export default function Navbar(props:Props){
  const navLabels = ['Prognos', 'Kläder']
  console.log(props.activeView)

  return (
    <div style = {navStyle}>
      <NavItem 
        id = {"/"} 
        name = {"Hem"} 
        isDayMode = {props.isDayMode} 
        onViewSelected = {props.onViewSelected} 
        activeView = {props.activeView}
      />
      {navLabels.map((value) => 
        <NavItem  
          isDayMode = {props.isDayMode} 
          key ={value} 
          id = {value} 
          name = {value} 
          onViewSelected = {props.onViewSelected} 
          activeView = {props.activeView} 
        />
      )}
    </div>
  )
}

const navStyle: CSSProperties = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  textDecoration: 'none',
  marginTop: '-0.2rem',
  zIndex: 2
}