import * as React from 'react';
import WeekDay from './WeekDay'


interface Props {
  isDayMode:boolean
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
    const response = await fetch("http://api.openweathermap.org/data/2.5/forecast?id=5695743&appid=16da1da324d687a04c8aec0742e21c35&lang=se");
    const data = await response.json();
    const dataWeather = data.list.filter((reading:any) => reading.dt_txt.includes("12:00:00"));
    this.setState({
      weatherData: dataWeather,
    })

    const responseToday  = await fetch("http://api.openweathermap.org/data/2.5/weather?id=5695743&appid=16da1da324d687a04c8aec0742e21c35&lang=se");
    const dataWeatherToday = await responseToday.json();
    this.setState({
      weatherToday: dataWeatherToday,
    })
    console.log("WeekOverview API call")
  }


  
  render() {
    const weatherList = this.state.weatherData;
    const weatherListToday = this.state.weatherToday;
    const hour = new Date().getHours()

    if (!weatherList) {
      return <p>Loading...</p>;
    }
    // console.log(weatherList)

    if (!weatherListToday) {
      return <p>Loading...</p>;
    }

    // console.log(weatherListToday)


    if(hour > 12){
      weatherList.pop();
      return (
        <div style={{ ...weatherListContainer}}>
            <WeekDay weatherContent={weatherListToday} key="0"  isDayMode={this.props.isDayMode}/>
            {
            weatherList.map((weatherContent:any, index:number) => 
            <WeekDay weatherContent={weatherContent} key={index}  isDayMode={this.props.isDayMode}
            />)}
        </div>
      );
    }

    return (
      <div style={{ ...weatherListContainer}}>
          {weatherList.map((weatherContent:any, index:number) => 
          <WeekDay weatherContent={weatherContent} key={index} isDayMode={this.props.isDayMode}/>
          )}
      </div>
    );
  }
}


const weatherListContainer: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column'
}
