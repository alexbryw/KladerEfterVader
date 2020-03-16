import React, {CSSProperties} from 'react'
import NavItem from './NavItem'


interface Props{
  isDayMode:boolean,
  onViewSelected: (id: string) => void,
  activeView: string
}

interface State{
  
}

export default class Navbar extends React.Component <Props, State>{

  render(){
    const navLabels = ['Prognos', 'Kläder']
    console.log(this.props.activeView)
    return (
      <div style = {navStyle}>
        <NavItem id = {"/"} name = {"Hem"} isDayMode = {this.props.isDayMode} onViewSelected = {this.props.onViewSelected} activeView = {this.props.activeView}/>
        {navLabels.map((value) => <NavItem  isDayMode = {this.props.isDayMode} key ={value} id = {value} name = {value} onViewSelected = {this.props.onViewSelected} activeView = {this.props.activeView} />)}
      </div>
    )
  }

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