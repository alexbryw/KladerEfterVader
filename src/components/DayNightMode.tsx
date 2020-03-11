import React, {CSSProperties} from 'react';

interface Props{
  isDayMode: boolean,
  buttonText: string,
  onToggleMode: () => void
}

export default class DayNightMode extends React.Component <Props>{

  render(){
    let imgURL;
    if(this.props.buttonText === "Natt"){
      imgURL = require(`../asset/images/weatherIcons/Night.png`);
    } else {
      imgURL = require(`../asset/images/weatherIcons/Day.png`);
    }

    return (
      <div style = {dayNightContainer} onClick = {this.props.onToggleMode}>
          <img style={dayNightButton} src={imgURL} alt={this.props.buttonText}/> 

      </div>
    );
  }
}

const dayNightContainer:CSSProperties = {
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  top: '0.7rem',
  right: '0.7rem',
  zIndex: 2,
  height:'4.5rem',
  width: '4.5rem',
  backgroundColor: '#FFF',
  borderRadius: '4em',
  border: '0.2rem black solid',
}

const dayNightButton:CSSProperties = {
  height:'3.5em',
  width: '3.5em',
}