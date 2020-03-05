import React, {CSSProperties} from 'react';

interface Props{}
interface State{
  buttonText: string,

}

export default class DayNightMode extends React.Component <Props, State>{
  constructor(props:Props){
    super(props);
    this.state = {
      buttonText: 'Dag'
    }
    this.toggleDayNight = this.toggleDayNight.bind(this)
  }

  toggleDayNight(){
    const newText = (this.state.buttonText === 'Dag'? 'Natt': 'Dag');
    this.setState({buttonText:newText})
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