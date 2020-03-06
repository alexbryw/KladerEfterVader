import * as React from 'react';
import WeatherFigure from './WeatherFigure'
import WeatherDescription from './WeatherDescription'

interface Props {
}

interface State {
  weatherToday?: any,
  weatherTomorrow?: any,
  weatherDayAfterTomorrow?: any,
  whatDay: string
}

export default class Clothes extends React.Component<Props, State>{
  constructor(props:Props){
    super(props);
    this.state = { 
      weatherToday: undefined,
      weatherTomorrow: undefined,
      weatherDayAfterTomorrow: undefined,
      whatDay: "today"
    };
  }

  async componentDidMount() {
    const hour = new Date().getHours()
    if(hour < 12){
      const response = await fetch("http://api.openweathermap.org/data/2.5/forecast?id=5695743&appid=16da1da324d687a04c8aec0742e21c35&lang=se");
      const data = await response.json();
      const dataWeather = data.list.filter((reading:any) => reading.dt_txt.includes("12:00:00"));
      this.setState({
        weatherTomorrow: dataWeather[1],
        weatherDayAfterTomorrow: dataWeather[2]
      })
      const responseToday  = await fetch("http://api.openweathermap.org/data/2.5/weather?id=5695743&appid=16da1da324d687a04c8aec0742e21c35&lang=se");
      const dataWeatherToday = await responseToday.json();
      this.setState({
        weatherToday: dataWeatherToday,
      })
    } else {
      const response = await fetch("http://api.openweathermap.org/data/2.5/forecast?id=5695743&appid=16da1da324d687a04c8aec0742e21c35&lang=se");
      const data = await response.json();
      const dataWeather = data.list.filter((reading:any) => reading.dt_txt.includes("12:00:00"));
      this.setState({
        weatherToday: dataWeather[0],
        weatherTomorrow: dataWeather[1],
        weatherDayAfterTomorrow: dataWeather[2]
      })
    }
  }

  handleClick = (event: any) => {
      this.setState({
        whatDay: event.target.value
      })
  }
  
  render() {
    let weatherOutPut;

    if(this.state.whatDay === "today"){
      weatherOutPut = this.state.weatherToday;
    } else if (this.state.whatDay === "tomorrow"){
      weatherOutPut = this.state.weatherTomorrow;
    } else if (this.state.whatDay === "dayAfterTomorrow") {
      weatherOutPut = this.state.weatherDayAfterTomorrow;
    }

    if (!weatherOutPut) {
      return <p>Loading...</p>;
    }
    console.log(this.state.weatherTomorrow)
    console.log(this.state.weatherDayAfterTomorrow)
    return (

      <div>
          <WeatherFigure weatherContent={weatherOutPut}/>
          <WeatherDescription weatherContent={weatherOutPut}/>
          <button type="button" name="whatDay" value="today" onClick={this.handleClick}>Idag</button>
          <button type="button" name="whatDay" value="tomorrow" onClick={this.handleClick}>Imorgon</button>
          <button type="button" name="whatDay" value="dayAfterTomorrow" onClick={this.handleClick}>I övermorgon</button>
          <p>{this.state.whatDay}</p>
      </div>
    );
  }
}

