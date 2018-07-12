import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { initializeIcons } from '@uifabric/icons';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import {Link} from 'office-ui-fabric-react/lib/Link';
import Employee from './Pages/Employee'
import { BrowserRouter } from 'react-router-dom';

initializeIcons();
class App extends Component {

   _onClickHandler(e: React.MouseEvent<HTMLElement>): false {
    alert('test');
    return false;
  }

   _onClickHandler2(e: React.MouseEvent<HTMLElement>): false {
    alert('test');
    return false;
  }
  onClick(event, element) {
    BrowserRouter.push(element.link);
  }
  //to design Drawer inside
  _onRenderLink = (link)=> {
    return (
      <span>
        <span key={1} className="Nav-linkText">
        <Link href={link.name}>
        {link.name}
        </Link>
        </span>
      </span>
    );
  }
  render() {
    return (
    <div className="App">
      <div className="Header">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
      <div className="body">
          <div className="NavMenu">
          <Nav
            onRenderLink={this._onRenderLink} 
            onLinkClick={this.onClick.bind(this)}
              groups={[
                {
                  links: [
                    {
                      name: 'Human Resource',
                      url: 'http://example.com',
                      links: [
                        {
                          name: 'Home',
                          url: '/Page/Employee',
                          key: 'key1',
                          onClick: this._onClickHandler2,
                        },
                        {
                          name: 'Task',
                          url: '/Page/Employee',
                          key: 'key2'
                        },
                        {
                          name: 'Reports',
                          url: 'http://msn.com',
                          key: 'key2'
                        },
                        {
                          name: 'Setup',
                          url: 'http://msn.com',
                          key: 'key2'
                        }
                      ],
                      isExpanded: true
                    },
                  
                  ]
                }
              ]}
              expandedStateText={'expanded'}
              collapsedStateText={'collapsed'}
              selectedKey={'key3'}
            />
           
        </div>
        <div className="MainArea">
          <Employee />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
