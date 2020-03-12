import React, {CSSProperties} from 'react';
import NavItem from './NavItem'


interface Props{
  isDayMode:boolean;
}

interface State{
  activeView: string
}

export default class Navbar extends React.Component <Props, State>{
  constructor(props:Props){
    super(props)
    this.state = {
      activeView:'Hem'
    }
  }

  setView = (name: string) => {
    this.setState({ activeView: name});
  }
  
  render(){
    const navLabels = ['Prognos', 'Kläder']

    return (
      <div style = {navStyle}>
        <NavItem id = {"/"} name = {"Hem"} isDayMode = {this.props.isDayMode} onViewSelected = {this.setView} activeView = {this.state.activeView}/>
        {navLabels.map((value) => <NavItem  isDayMode = {this.props.isDayMode} key ={value} id = {value} name = {value} onViewSelected = {this.setView} activeView = {this.state.activeView} />)}
      </div>
    );
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