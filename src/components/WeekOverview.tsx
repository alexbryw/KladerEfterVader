import React, {CSSProperties} from 'react';
import WeekDay from './WeekDay'


interface Props {
  isDayMode:boolean,
  loadWeather: object
}

interface State {
  weatherData?: object,
  weatherToday?: object,
  isLoadedDataWeather: boolean,
  isLoadedDataWeatherToday: boolean
}

export default class WeekOverview extends React.Component<Props, State>{
  constructor(props:Props){
    super(props);
    this.state = { 
      isLoadedDataWeather: false,
      isLoadedDataWeatherToday: false,
      weatherData: undefined,
      weatherToday: undefined,
    };
  }

  async componentDidMount() {
    this.setState({ isLoadedDataWeather: false });
    this.setState({ isLoadedDataWeatherToday: false });
    const response = await fetch("http://api.openweathermap.org/data/2.5/forecast?id=5695743&appid=16da1da324d687a04c8aec0742e21c35&lang=se");
    const data = await response.json();
    const dataWeather = data.list.filter((reading:any) => reading.dt_txt.includes("12:00:00"));
    this.setState({
      weatherData: dataWeather,
      isLoadedDataWeather: true
    })

    const responseToday  = await fetch("http://api.openweathermap.org/data/2.5/weather?id=5695743&appid=16da1da324d687a04c8aec0742e21c35&lang=se");
    const dataWeatherToday = await responseToday.json();
    this.setState({
      weatherToday: dataWeatherToday,
      isLoadedDataWeatherToday: true
    })
    console.log("WeekOverview API call")
  }


  
  render() {
    let weatherList:any;
    let weatherListToday;
    const hour = new Date().getHours();

    if (!this.state.isLoadedDataWeather || !this.state.isLoadedDataWeatherToday) {
      weatherList = this.props.loadWeather;
      const num = [0,1,2,3,4];
      return (
        <div style={weatherListContainer}>
            {num.map((weatherContent:any, index:number) =>
            <WeekDay weatherContent={weatherList} key={index}  isDayMode={this.props.isDayMode}/>
            )}
        </div>
      )} else {
      weatherList = this.state.weatherData;
      weatherListToday = this.state.weatherToday;
    }

    if(hour > 12){
      weatherList.pop();
      return (

        <div style={weekListStyle}>
            <WeekDay weatherContent={weatherListToday} key="0"  isDayMode={this.props.isDayMode}/>
            {
            weatherList.map((weatherContent:object, index:number) => 
            <WeekDay weatherContent={weatherContent} key={index}  isDayMode={this.props.isDayMode}
            />)}
        </div>
      );
    }

    return (
      <div style={weekListStyle}>
          {weatherList.map((weatherContent:any, index:number) => 
          <WeekDay weatherContent={weatherContent} key={index} isDayMode={this.props.isDayMode}/>
          )}
      </div>
    );
  }
}


const weatherListContainer: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  height: '75vh',
  justifyContent: 'space-around',
  margin: '10vh 2rem 0 2rem'
}

const weekOverviewGridItem: CSSProperties = {
  gridArea: 'week'
}

const weekListStyle = {...weatherListContainer, ...weekOverviewGridItem}
