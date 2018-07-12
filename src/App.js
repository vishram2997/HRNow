import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { initializeIcons } from '@uifabric/icons';
import User from './Pages/User';
import Header from './Pages/Header';
import MainArea from './Pages/MainArea';
import SideNav from './Pages/SideNav';
import Footer from './Pages/Footer';


initializeIcons();
class App extends Component {


  render() {
    return (
    <div className="App">
    <Header />
      <div className="body">
        <SideNav />
        <MainArea />
      </div>
      <Footer />
    </div>
    );
  }
}

export default App;
