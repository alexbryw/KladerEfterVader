import React from 'react';



interface Props {
  weatherContent: any
}

export default class WeatherDescription extends React.Component<Props>{
    constructor(props:Props){
      super(props);
      this.state={};
    }


    render() {
      const weather = this.props.weatherContent
      const imgURL = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
      const weekdayNameSE = ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Tordag', 'Fredag', 'Lördag']
      const weekdayNum = new Date(this.props.weatherContent.dt * 1000).getDay();
      const weekdayName = weekdayNameSE[weekdayNum]
      return (
          <div>
            <img src={imgURL} alt=""/>
            <p>{weekdayName} - Det är {(weather.main.temp - 273.15).toFixed(1)} ° grader och {weather.weather[0].description}</p>
          </div>
      );
  }
}