import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import WeekOverview from './WeekOverview';
import Clothes from './Clothes';

export default function MainView(){
    return (
        <Switch>
            <Route exact path = '/' component = {Home} />
            <Route path = '/Prognos' component = {WeekOverview} />
            <Route path = '/Kläder' component = {Clothes} />
        </Switch>
    )
}