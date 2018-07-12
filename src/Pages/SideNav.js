import React, { Component } from 'react';
import '../App.css';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { initializeIcons } from '@uifabric/icons';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
//import {Link} from 'office-ui-fabric-react/lib/Link';
import {Link } from 'react-router-dom';
import Task from './Task'
import { BrowserRouter } from 'react-router-dom';
class SideNav extends Component {
    _onClickHandler(e: React.MouseEvent<HTMLElement>): false {
        return false;
      }

       _onClickHandler2(e: React.MouseEvent<HTMLElement>): false {
        return false;
      }
      onClick(event, element) {
       // BrowserRouter.push(element.link);
      }
      //to design Drawer inside
      _onRenderLink = (link)=> {
        return (
          <span>
            <span key={1} className="Nav-linkText">
            <Link to={link.name}>
            {link.name}
            </Link>
            </span>
          </span>
        );
      }
    render() {
        return (
            <div>
            <div className="NavMenu">
            <Nav
              onRenderLink={this._onRenderLink}
              onLinkClick={this.onClick.bind(this)}
                groups={[
                  {
                    links: [
                      {
                        name: 'Home',
                        url: 'http://example.com',
                        links: [
                          {
                            name: 'User',
                            url: '/Page/Employee',
                            key: 'key1',
                            onClick: this._onClickHandler2,
                          },
                          {
                            name: 'Task',
                            url: '/Page/Task',
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
          </div>
        )
    }
}
export default SideNav;
