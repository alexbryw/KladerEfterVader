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
        <button style = {buttonStyle} onClick = {this.props.onToggleMode}> {this.props.buttonText} </button>
      </div>
    );
  }
}

const dayNightContainer:CSSProperties = {
  position: 'absolute',
  top: '1.5rem',
  right: '1.5rem',
  zIndex: 2,
}

const buttonStyle:CSSProperties = {
  borderRadius: '25px',
  height: '3.3rem',
  width: '3.3rem',
  padding: '0.5rem',
  border: '3px solid black'
}