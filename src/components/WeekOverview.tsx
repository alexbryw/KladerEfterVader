import * as React from 'react';
import WeekDay from './WeekDay'

interface Props {
  weatherContent: any,
  key: number
}

interface State {
  weatherDataMorning?: any,
  weatherDataMidday?: any,
  weatherDataEvening?: any,
}

export default class WeekOverview extends React.Component<Props, State>{
  constructor(props:Props){
    super(props);
    this.state = { 
      weatherDataMorning: undefined,
      weatherDataMidday: undefined,
      weatherDataEvening: undefined,
    };
  }


  async componentDidMount() {
    const response = await fetch("http://api.openweathermap.org/data/2.5/forecast?id=2673730&appid=16da1da324d687a04c8aec0742e21c35&lang=se");
    const data = await response.json();
    const dataMorning = data.list.filter((reading:any) => reading.dt_txt.includes("09:00:00"));
    const dataMidday = data.list.filter((reading:any) => reading.dt_txt.includes("12:00:00"));
    const dataEvening = data.list.filter((reading:any) => reading.dt_txt.includes("18:00:00"));

    // console.log(dataMorning);
    //console.log(dataMidday);
    // console.log(dataEvening);

    this.setState({
      weatherDataMorning: dataMorning,
      weatherDataMidday: dataMidday,
      weatherDataEvening: dataEvening,
    })
  }
  
  render() {
    const weatherList = this.state.weatherDataMidday;

    if (!weatherList) {
      return <li>Loading...</li>;
    }
    console.log(weatherList);
    return (
      <div>
        {weatherList.map((weatherContent:any, index:number) => <WeekDay weatherContent={weatherContent} key={index} />)}
      </div>
    );
  }
}


