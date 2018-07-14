import React, { Component } from 'react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import '../App.css';
import User from './User'
import Task from './Task';
import Setup from './Setup';
import Report from './Report';
import { NavLink, Switch, Route } from 'react-router-dom';
class MainArea extends Component {
    render() {
        return (
            <div className="MainArea">
            <Switch>
                <Route exact  path='/' component={User}></Route>
                <Route exact  path='/Task' component={Task}></Route>
                <Route exact  path='/User' component={User}></Route>
                <Route exact  path='/Report' component={Report}></Route>
                <Route exact  path='/Setup' component={Setup}></Route>

             </Switch>
            </div>
        )
    }
}
export default MainArea;
