import React, {CSSProperties} from 'react';

interface Props{
  isDayMode: boolean,
  buttonText: string,
  onToggleMode: () => void
}

export default class DayNightMode extends React.Component <Props>{

  render(){
    return (
      <div style = {dayNightContainer}>
        <button onClick = {this.props.onToggleMode}> {this.props.buttonText} </button>
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