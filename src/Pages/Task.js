import React, { Component } from 'react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import '../App.css';
class Task extends Component {
    render() {
        return (
            <div className="Task">
                <Label>I'm a Task</Label>
          </div>
        )
    }
}
export default Task;
