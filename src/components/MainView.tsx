import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import WeekOverview from './WeekOverview';
import Clothes from './Clothes';

interface Props{
    isDayMode: boolean
}

export default function MainView(props : Props){
    return (
        <Switch>
            <Route exact path = '/' component={() => <Home isDayMode={props.isDayMode}/>} />
            <Route path = '/Prognos' component={() => <WeekOverview  isDayMode={props.isDayMode}/>} />
            <Route path = '/Kläder' component={() => <Clothes isDayMode={props.isDayMode}/>} />
        </Switch>
    )
}

