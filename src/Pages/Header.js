import React, { Component } from 'react';
import '../App.css';
import { Label } from 'office-ui-fabric-react/lib/Label';
import logo from '../logo.svg';
class Header extends Component {
    render() {
        return (
            <div className="Header">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
                </header>
            </div>
        )
    }
}
export default Header;
