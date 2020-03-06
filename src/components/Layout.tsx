import React, {CSSProperties}from 'react';
import MainView from './MainView'
import Navbar from './Navbar'
import DayNightMode from './DayNightMode'
import ErrorBoundary from './ErrorBoundary'

interface Props{}

interface State{
  isDayMode: boolean,
  buttonText: string,
  modeStyle: React.CSSProperties
}

export default class Layout extends React.Component <Props, State>{
  constructor(props:Props){
    super(props)
    this.state = {
      isDayMode: true,
      buttonText: 'Dag',
      modeStyle: mainDayStyle
    }
    this.toggleDayNightMode = this.toggleDayNightMode.bind(this)
  }

  toggleDayNightMode() {
    const newDay = (this.state.isDayMode? false:true)
    this.setState({isDayMode:newDay})

    if (this.state.isDayMode){
      this.setState({buttonText: "Natt"});
      this.setState({modeStyle: mainNigthStyle});
    }
    else{
      this.setState({buttonText:"Dag"});
      this.setState({modeStyle: mainDayStyle})
    }
  }

  render(){
    return (
      <div style = {this.state.modeStyle}>
          <ErrorBoundary>
            <MainView />
          </ErrorBoundary>
          <DayNightMode isDayMode = {this.state.isDayMode} buttonText = {this.state.buttonText} onToggleMode = {this.toggleDayNightMode}/>
          <Navbar isDayMode = {this.state.isDayMode}/>
      </div>
    );
  }
}

const mainDayStyle:CSSProperties = {
  backgroundColor: '#b3d9ff',
  height: '100vh',
  width: '100%',
  position: 'relative',
  color: 'black'
}

const mainNigthStyle:CSSProperties = {
  backgroundColor: '#000033',
  height: '100vh',
  width: '100%',
  position: 'relative',
  color: '#ffffcc'
}
