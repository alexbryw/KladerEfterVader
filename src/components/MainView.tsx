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
        <Switch>
            <Route exact path = '/' component={() => <Home 
                isDayMode={props.isDayMode} 
                loadWeather={props.loadWeather} 
            />} />
            <Route path = '/Prognos' component={() => <WeekOverview 
                isDayMode={props.isDayMode}
                loadWeather={props.loadWeather}
            />} />
            <Route path = '/Kläder' component={() => <Clothes
                isDayMode={props.isDayMode}
                loadWeather={props.loadWeather}
            />}/>
        </Switch>
    )
}

