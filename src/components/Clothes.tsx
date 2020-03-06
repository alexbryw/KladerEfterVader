import * as React from 'react';
import WeatherFigure from './WeatherFigure'
import WeatherDescription from './WeatherDescription'

interface Props {
}

interface State {
  weatherData?: any,
}

export default class Clothes extends React.Component<Props, State>{
  constructor(props:Props){
    super(props);
    this.state = { 
      weatherData: undefined,
    };
  }

  async componentDidMount() {
    const response = await fetch("http://api.openweathermap.org/data/2.5/weather?id=5695743&appid=16da1da324d687a04c8aec0742e21c35&lang=se");
    const dataWeather = await response.json();
    this.setState({
      weatherData: dataWeather,
    })
  }
  
  render() {
    const weather = this.state.weatherData;
    if (!weather) {
      return <p>Loading...</p>;
    }
    return (
      <div>
          <WeatherFigure weatherContent={weather}/>
          <WeatherDescription weatherContent={weather}/>
      </div>
    );
  }
}

