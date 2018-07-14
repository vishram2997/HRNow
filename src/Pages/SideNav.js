import React, { Component } from 'react';
import '../App.css';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { initializeIcons } from '@uifabric/icons';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
//import {Link} from 'office-ui-fabric-react/lib/Link';
import {Link } from 'react-router-dom';
import Task from './Task'
import { BrowserRouter } from 'react-router-dom';
import { NavLink, Switch, Route } from 'react-router-dom';
import { FocusZone, FocusZoneDirection } from 'office-ui-fabric-react/lib/FocusZone';
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

class SideNav extends Component {
    
    render() {
        return (
            <div>
            <div className="NavMenu">
            <Drawer
              variant="permanent"
              anchor={'left'}
            >
              <div className="menuItem" />
              <List component="nav" >
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="User" />
              </ListItem>
            </List>
            <Divider />
            <List component="nav">
              <ListItem button>
                <ListItemText primary="Setup" />
              </ListItem>
              <ListItem button component="a" href="#simple-list">
                <ListItemText primary="Report" />
              </ListItem>
            </List>
              
          </Drawer>

          </div>
          </div>
        )
    }
}
export default SideNav;
