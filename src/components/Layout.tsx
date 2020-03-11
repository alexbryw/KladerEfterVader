import React, {CSSProperties}from 'react';
import MainView from './MainView'
import Navbar from './Navbar'
import DayNightMode from './DayNightMode'
import ErrorBoundary from './ErrorBoundary'
import Home from './Home';
import WeekOverview from './WeekOverview';
import Clothes from './Clothes';

interface Props{
}

interface State{
  isDayMode: boolean,
  buttonText: string,
  modeStyle: React.CSSProperties,
  deviceSize: "isMobile" | "isDesktop"
}

export default class Layout extends React.Component <Props, State>{
  constructor(props:Props){
    super(props)
    this.state = {
      isDayMode: true,
      buttonText: 'Dag',
      modeStyle: mainDayStyle,
      deviceSize: this.calculateDeviceSize()
    }
    this.toggleDayNightMode = this.toggleDayNightMode.bind(this)
  }

  toggleDayNightMode() {
    const newDay = (this.state.isDayMode? false:true)
    this.setState({isDayMode:newDay})

    if (this.state.isDayMode){
      this.setState({buttonText: "Natt"});
      this.setState({modeStyle: mainNigthStyle});
    }
    else{
      this.setState({buttonText:"Dag"});
      this.setState({modeStyle: mainDayStyle})
    }
  }

  updateDeviceSize = () => {
    this.setState({ deviceSize: this.calculateDeviceSize() })

  }

  calculateDeviceSize(): "isMobile" | "isDesktop" {
    if (window.innerWidth < 900) {
      return 'isMobile'
    } else {
      return 'isDesktop'
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDeviceSize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDeviceSize)
  }

  render(){

    console.log(this.state.deviceSize)
    const loadWeather = {
      "dt":32503683661,
      "main":{
          "temp":273.15,
          "feels_like":273.15,
          "temp_min":273.15,
          "temp_max":273.15,
          "pressure":1000,
          "sea_level":1000,
          "grnd_level":1000,
          "humidity":100,
          "temp_kf":0
      },"weather":[{
          "id":800,
          "main":"Weather",
          "description":"väder",
          "icon":"load"
      }],"clouds":{
          "all":0
      },"wind":{
          "speed":0.00,
          "deg":236},
          "sys":{
          "pod":"n"
      },"dt_txt":"3000-01-01 01:01:01"
  }
   
    if(this.state.deviceSize === "isMobile"){
      return (
        <div style = {mainStyle}>
            <ErrorBoundary>
            <div style = {{...borderMobile, ...this.state.modeStyle}}>
              <MainView isDayMode = {this.state.isDayMode} loadWeather={loadWeather}/>
            </div>
            </ErrorBoundary>
            <DayNightMode isDayMode = {this.state.isDayMode} buttonText = {this.state.buttonText} onToggleMode = {this.toggleDayNightMode}/>
            <Navbar isDayMode = {this.state.isDayMode}/>
        </div>
      );
    }

    else{
      return (
        <div style = {{...this.state.modeStyle, ...gridLayoutDesktop, ...mainStyle, ...borderDesktop}}>
            <ErrorBoundary>
              <Home isDayMode={this.state.isDayMode} loadWeather = {loadWeather}/>
            </ErrorBoundary>
            <ErrorBoundary>
              <WeekOverview isDayMode = {this.state.isDayMode} loadWeather = {loadWeather}/>
            </ErrorBoundary>
            <ErrorBoundary>
              <Clothes isDayMode = {this.state.isDayMode} loadWeather = {loadWeather}/>
            </ErrorBoundary>
            <DayNightMode isDayMode = {this.state.isDayMode} buttonText = {this.state.buttonText} onToggleMode = {this.toggleDayNightMode}/>
        </div>
      );
    }

  }
}

const mainDayStyle:CSSProperties = {
  backgroundColor: '#b3d9ff',
  color: 'black'
  
}

const mainNigthStyle:CSSProperties = {
  backgroundColor: '#000033',
  color: '#ffffcc'
}

const mainStyle:CSSProperties = {
  height: '100%',
  width: '100%',
  position: 'relative',
}

const borderMobile:CSSProperties = {
  borderTop: '3px solid black',
  borderRight: '3px solid black',
  borderLeft: '3px solid black',
  borderTopLeftRadius: '25px',
  borderTopRightRadius: '25px',
  height: '95%'
}

const borderDesktop:CSSProperties = {
  border: '3px solid black',
  borderRadius: '25px',
}


const gridLayoutDesktop: CSSProperties = {
  display: 'grid',
  width: '100%',
  height: '100%',
  gridTemplateColumns: '35% 25% 40%',
  gridTemplateAreas: 
  '"home week clothes"',
}