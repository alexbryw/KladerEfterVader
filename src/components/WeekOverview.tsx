import React, {CSSProperties} from 'react';
import WeekDay from './WeekDay';
import { WeatherResponse } from '../api-typings';


interface Props {
  isDayMode:boolean,
  loadWeather: object,
  weatherContent: WeatherResponse[],
}

interface State {
}

export default class WeekOverview extends React.Component<Props, State>{
  constructor(props:Props){
    super(props);
    this.state = { 
    };
  }

  render() {
    return(
      <div style={weekListStyle}>
        {this.props.weatherContent.map((weatherContent:any, index:number) =>
        <WeekDay weatherContent={weatherContent} key={index} isDayMode={this.props.isDayMode}/>
      )}
    </div>
    )
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
