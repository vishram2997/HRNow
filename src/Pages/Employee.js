import React, { Component } from 'react';
import { Label } from 'office-ui-fabric-react/lib/Label';
class Employee extends Component {
    render() {
        return (
            <div>
                
            <Label>I'm a Employee</Label>
            <Label disabled={true}>I'm a disabled Label</Label>
            <Label required={true}>I'm a required Label</Label>
          </div>
        )
    }
}
export default Employee;
