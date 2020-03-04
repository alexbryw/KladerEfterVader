import React from 'react';


interface Props {
  weatherContent: any
}

export default class WeekDay extends React.Component<Props>{
    constructor(props:Props){
      super(props);
      this.state={};
    }


    render() {
      const imgURL = `http://openweathermap.org/img/wn/${this.props.weatherContent.weather[0].icon}@2x.png`;
      const weekdayNameSE = ['Sön', 'Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör']
      const weekdayNum = new Date(this.props.weatherContent.dt * 1000).getDay();
      const weekdayName = weekdayNameSE[weekdayNum]

      return (
          <div>
            <img width="40"
              src={imgURL} 
              alt={this.props.weatherContent.weather[0].description}/>
            <p>
              {weekdayName}{" - "}
              {this.props.weatherContent.weather[0].description} {"  "}
              {(this.props.weatherContent.main.temp - 273.15).toFixed(1)}°C
              </p>
          </div>
      );
  }
}
