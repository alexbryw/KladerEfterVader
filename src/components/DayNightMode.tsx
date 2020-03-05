import React, {CSSProperties} from 'react';

interface Props{}
interface State{
  buttonText: string,
  isDay: boolean
}

export default class DayNightMode extends React.Component <Props, State>{
  constructor(props:Props){
    super(props);
    this.state = {
      buttonText: 'Dag',
      isDay: true
    }
    this.toggleDayNight = this.toggleDayNight.bind(this)
  }

  toggleDayNight(){
    const newDay = (this.state.isDay? false:true)
    this.setState({isDay:newDay})

    if (this.state.isDay){
      this.setState({buttonText: "Dag"})
    }
    else{
      this.setState({buttonText:"Natt"})
    }
  }


  render(){
    return (
      <div style = {dayNightContainer}>
        <button onClick = {this.toggleDayNight}> {this.state.buttonText} </button>
      </div>
    );
  }
}

const dayNightContainer:CSSProperties = {
  position: 'absolute',
  top: '2%',
  right: '2%',
  zIndex: 2
}