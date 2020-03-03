import * as React from 'react';
import WeekDay from './WeekDay'

interface Props {
  text: number
}

interface State {
  weatherData?: WeatherData,
  loading: boolean
}

interface WeatherData { //Stoppa in all data vi vill ha
  name: string
  age: number
}

export default class WeekOverview extends React.Component<Props, State>{
  constructor(props:Props){
    super(props);
    this.state = { 
      weatherData: undefined,
      loading: false
    };
  }


  async componentDidMount() {
    this.setState({loading: true})
    const response = await fetch("https://swapi.co/api/people/1")
    const data = await response.json()
    this.setState({
      loading: false,
      weatherData: data
    })
  }
  
  render(){
    const kamel = this.state.loading ? "loading..." : this.state.weatherData?.name
    const num = [1,2,3,4,5];
      return (
        <div>
          {num.map((value) => <WeekDay key={value} text={value} />)}
          {kamel}
        </div>
      );
  }
}