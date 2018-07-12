import React, { Component } from 'react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import '../App.css';
import User from './User'
class MainArea extends Component {
    render() {
        return (
            <div className="MainArea">
                <User />
            </div>
        )
    }
}
export default MainArea;
