import * as React from 'react';
import WeekDay from './WeekDay'


interface Props {
  weatherContent: any,
  key: number
}

interface State {
  weatherData?: any,
  weatherToday?: any,
}

export default class WeekOverview extends React.Component<Props, State>{
  constructor(props:Props){
    super(props);
    this.state = { 
      weatherData: undefined,
      weatherToday: undefined,
    };
  }

  async componentDidMount() {
    const response = await fetch("http://api.openweathermap.org/data/2.5/forecast?id=2673730&appid=16da1da324d687a04c8aec0742e21c35&lang=se");
    const data = await response.json();
    const dataWeather = data.list.filter((reading:any) => reading.dt_txt.includes("12:00:00"));
    this.setState({
      weatherData: dataWeather,
    })
    const responseToday  = await fetch("http://api.openweathermap.org/data/2.5/weather?id=2673730&appid=16da1da324d687a04c8aec0742e21c35&lang=se");
    const dataWeatherToday = await responseToday.json();
    this.setState({
      weatherToday: dataWeatherToday,
    })
  }


  
  render() {
    const weatherList = this.state.weatherData;
    const weatherListToday = this.state.weatherToday;
    const hour = new Date().getHours()

    if (!weatherList) {
      return <p>Loading...</p>;
    }
    if (!weatherListToday) {
      return <p>Loading...</p>;
    }

    if(hour > 12){
      weatherList.pop();
      return (
        <div style={{ ...weatherListContainer}}>
            <WeekDay weatherContent={weatherListToday} key="0" />
            {
            weatherList.map((weatherContent:any, index:number) => 
            <WeekDay weatherContent={weatherContent} key={index} 
            />)}
        </div>
      );
    }

    return (
      <div style={{ ...weatherListContainer}}>
          {weatherList.map((weatherContent:any, index:number) => 
          <WeekDay weatherContent={weatherContent} key={index} 
      />)}
      </div>
    );
  }
}


const weatherListContainer: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column'
}
