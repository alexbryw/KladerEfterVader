import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import WeekOverview from './WeekOverview';
import Clothes from './Clothes';

interface Props{
    isDayMode: boolean,
    loadWeather: object
}

export default function MainView(props : Props){
    
    return (
        //use render, not component function, to stop mounting/unmounting of components on every update.
        //remove old commented out code later, when everything is working.
        <Switch>
            <Route exact path = '/' component={() => <Home 
                {...props}
                isDayMode={props.isDayMode} 
                loadWeather={props.loadWeather} 
            />} />
            <Route path = '/Prognos' component={() => <WeekOverview 
                {...props}
                isDayMode={props.isDayMode}
                loadWeather={props.loadWeather}
            />} />
            <Route path = '/Kläder' component={() => <Clothes
                {...props}
                isDayMode={props.isDayMode}
                loadWeather={props.loadWeather}
            />}/>
            {/* <Route exact path = '/' component={() => <Home isDayMode={props.isDayMode}/>} /> */}
            {/* <Route path = '/Prognos' component={() => <WeekOverview  isDayMode={props.isDayMode}/>} /> */}
            {/* <Route path = '/Kläder' component={() => <Clothes isDayMode={props.isDayMode}/>} /> */}

        </Switch>
    )
}

