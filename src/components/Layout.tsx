import React, {CSSProperties}from 'react';
import MainView from './MainView'
import Navbar from './Navbar'
import DayNightMode from './DayNightMode'

interface Props{}

interface State{
  isDayMode: boolean,
  buttonText: string
}

export default class Layout extends React.Component <Props, State>{
  constructor(props:Props){
    super(props)
    this.state = {
      isDayMode: true,
      buttonText: 'Dag'
    }
    this.toggleDayNightMode = this.toggleDayNightMode.bind(this)
  }

  toggleDayNightMode() {
    const newDay = (this.state.isDayMode? false:true)
    this.setState({isDayMode:newDay})

    if (this.state.isDayMode){
      this.setState({buttonText: "Natt"})
    }
    else{
      this.setState({buttonText:"Dag"})
    }
  }

  render(){
    return (
      <div style = {mainDayStyle}>
          <MainView />
          <DayNightMode isDayMode = {this.state.isDayMode} buttonText = {this.state.buttonText} onToggleMode = {this.toggleDayNightMode}/>
          <Navbar />
      </div>
    );
  }
}

const mainDayStyle:CSSProperties = {
  backgroundColor: 'lightblue',
  height: '100vh',
  width: '100%',
  position: 'relative'
}
