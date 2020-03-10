import React, {CSSProperties}from 'react';
import MainView from './MainView'
import Navbar from './Navbar'
import DayNightMode from './DayNightMode'
import ErrorBoundary from './ErrorBoundary'
import Home from './Home';
import WeekOverview from './WeekOverview';
import Clothes from './Clothes';

interface Props{}

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
    if (window.innerWidth < 768) {
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
   
    if(this.state.deviceSize === "isMobile"){
      return (
        <div style = {mainStyle}>
            <ErrorBoundary>
              <div style = {{...borderMobile, ...this.state.modeStyle}}>
                <MainView />
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
              <Home />
            </ErrorBoundary>
            <ErrorBoundary>
              <WeekOverview />
            </ErrorBoundary>
            <ErrorBoundary>
              <Clothes />
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
  borderRadius: '25px'
}


const gridLayoutDesktop: CSSProperties = {
  display: 'grid',
  width: '100%',
  height: '100%',
  gridTemplateColumns: '55% 45%',
  gridTemplateAreas: 
  '"home clothes" "week clothes"',
}


