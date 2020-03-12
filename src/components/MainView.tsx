import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import WeekOverview from './WeekOverview';
import Clothes from './Clothes';
import { WeatherResponse } from '../api-typings';

interface Props{
    isDayMode: boolean,
    weatherContent: WeatherResponse[]
}

export default function MainView(props : Props){
    
    return (
        //use render, not component function, to stop mounting/unmounting of components on every update.
        //remove old commented out code later, when everything is working.
        <Switch>
            <Route exact path = '/' render={() => <Home
                {...props}
                isDayMode={props.isDayMode}
                weatherContent={props.weatherContent}
            />} />
            <Route path = '/Prognos' render={() => <WeekOverview
                {...props}  isDayMode={props.isDayMode}
                weatherContent={props.weatherContent}
            />} />
            <Route path = '/Kläder' render={() => <Clothes
                {...props}
                isDayMode={props.isDayMode}
                weatherContent={props.weatherContent}
            />} />
            {/* <Route exact path = '/' component={() => <Home isDayMode={props.isDayMode}/>} /> */}
            {/* <Route path = '/Prognos' component={() => <WeekOverview  isDayMode={props.isDayMode}/>} /> */}
            {/* <Route path = '/Kläder' component={() => <Clothes isDayMode={props.isDayMode}/>} /> */}
        </Switch>
    )
}