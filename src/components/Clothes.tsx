import React, {CSSProperties} from 'react';
import WeatherFigure from './WeatherFigure';
import WeatherDescription from './WeatherDescription';
import { WeatherResponse } from '../api-typings';

interface Props {
  isDayMode: boolean,
  weatherContent: WeatherResponse[]
}

interface State {
  whatDay: string,
  todayButton: string,
  tomorrowButton: string,
  dayAfterTomorrowButton: string,
}

export default class Clothes extends React.Component<Props, State>{
  constructor(props:Props){
    super(props);
    this.state = { 
      whatDay: "today",
      todayButton: "#D3D3D3",
      tomorrowButton: "#FFF",
      dayAfterTomorrowButton: "#FFF",
    };
  }


  handleClick = (event: any) => {
      this.setState({
        whatDay: event.target.value,
      })
      if(event.target.value === "today"){
        this.setState({
          todayButton: "#D3D3D3",
          tomorrowButton: "#FFF",
          dayAfterTomorrowButton: "#FFF",
        })
      } else if (event.target.value === "tomorrow"){
        this.setState({
          todayButton: "#FFF",
          tomorrowButton: "#D3D3D3",
          dayAfterTomorrowButton: "#FFF",
        })
      } else if (event.target.value === "dayAfterTomorrow"){
        this.setState({
          todayButton: "#FFF",
          tomorrowButton: "#FFF",
          dayAfterTomorrowButton: "#D3D3D3",
        })
      }
  }

  render() {
    let weatherOutPut;
    let whatDayIsIt;

    if(this.state.whatDay === "today"){
      weatherOutPut = this.props.weatherContent[0];
      whatDayIsIt = "Idag";
    } else if (this.state.whatDay === "tomorrow"){
      weatherOutPut = this.props.weatherContent[1];
      whatDayIsIt = "Imorgon";
    } else if (this.state.whatDay === "dayAfterTomorrow") {
      weatherOutPut = this.props.weatherContent[2];
      whatDayIsIt = "I övermorgon";
    }

    if (!weatherOutPut) {
      return <p>Loading...</p>;
    }

    return (
      <div style = {clothesGridItem}>
          <WeatherFigure weatherContent={weatherOutPut} isDayMode={this.props.isDayMode}/>
          <WeatherDescription weatherContent={weatherOutPut} whatDayIsIt={whatDayIsIt}/>
        <div style = {buttonWrapper}>
          <button 
            style = {{...buttonStyle, backgroundColor:this.state.todayButton}}
            type="button"
            name="whatDay"
            value="today"
            onClick={this.handleClick}
            >Idag
          </button>
          <button 
            style = {{...buttonStyle, backgroundColor:this.state.tomorrowButton}}
            type="button"
            name="whatDay"
            value="tomorrow"
            onClick={this.handleClick}
            >Imorgon
          </button>
          <button 
            style = {{...buttonStyle,
            backgroundColor:this.state.dayAfterTomorrowButton}}
            type="button"
            name="whatDay"
            value="dayAfterTomorrow"
            onClick={this.handleClick}
            >I över-<br/>morgon
          </button>
        </div>
      </div>
    );
  }
}

const clothesGridItem: CSSProperties = {
  gridArea: 'clothes',
  height: '100%',
  maxWidth: '100rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'space-around'
}

const buttonWrapper:CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '10%',
}

const buttonStyle:CSSProperties={
  height: '3rem',
  width: '5rem',
  padding: '0.25rem 0.5rem',
  borderRadius: '25px',
  border: '3px solid black',
  outline: 'none',
  cursor: 'pointer',
  margin: '1em 0.5em 0'
}