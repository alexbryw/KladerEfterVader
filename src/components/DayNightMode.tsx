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
      <div style = {dayNightContainer}>
        <button onClick = {this.props.onToggleMode}> <img style={dayNightButton} src={imgURL} alt={this.props.buttonText}/> </button>
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

const dayNightButton:CSSProperties = {
  height:'4em',
  width: '4em',
}