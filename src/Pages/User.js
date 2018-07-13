import base64 from 'Base64';
import React, { Component } from 'react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { navUrl, getAuthorizationHeaderValue } from '../config';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
//import { syncData } from '../sync';
import { fetchWrapper } from '../request';
import {
    DetailsList,
    DetailsListLayoutMode,
    Selection,
    SelectionMode,
    IColumn
  } from 'office-ui-fabric-react/lib/DetailsList';



class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [], columns: []
        };
    }
    syncData(){
    var col = [];

     fetch('http://10.0.0.52:9000/States')
        .then(response => {
            return response.json()
        })
        .then(responseJson =>{

            const vendApiData = responseJson;
          for (var key in vendApiData[0]) {
            col.push({
            key: key,
            name:  key,
            fieldName:  key,
            minWidth: vendApiData[0][key].toString().length*20,
            maxWidth: vendApiData[0][key].toString().length*20,
            isPadded: true,
            isRowHeader: true,

        isResizable: true,
        });
        this.setState(this.state.data =vendApiData)
    }
    this.setState(this.state.columns=col)


        }
    )

        console.log(this.state.data)




    }

    componentDidMount() {
          this.syncData()
    }
    render() {
        return (
            <div>
            <MarqueeSelection>
                <DetailsList
                items={this.state.data}
                compact={false}
                columns={this.state.columns}
                setKey="set"
                layoutMode={DetailsListLayoutMode.justified}
                isHeaderVisible={true}
                selection={false}
                selectionPreservedOnEmptyClick={true}
                onItemInvoked={this._onItemInvoked}
                enterModalSelectionOnTouch={true}
            />
            </MarqueeSelection>
          </div>
        )
    }
}
export default User;
