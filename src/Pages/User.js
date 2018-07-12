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

//this._navUrl =navUrl;
const vendorData = {"odata.metadata":"http://navserver.baqala.me:9348/Nav9Mob/OData/$metadata#Vendors","value":[{"No":"VEND0021","Name":"Kuwait Food Company Americana S.A.K.","Currency_Code":""},{"No":"VEND0028","Name":"Refreshment Trading Company","Currency_Code":""},{"No":"VEND0034","Name":"United Beverages Company K.S.C.C","Currency_Code":""},{"No":"VEND0042","Name":"The Kuwaiti Danish Dairy Company KCSC","Currency_Code":""},{"No":"VEND0046","Name":"Dunia Dasman Gen. Trad. & Cont. Co.","Currency_Code":""},{"No":"VEND0052","Name":"Oishii Company for Restaurants and Snacks","Currency_Code":""},{"No":"VEND0058","Name":"Fresh Packs For Filling And Packing of Food Stuff ","Currency_Code":""},{"No":"VEND0073","Name":"Mohd Abdulrahman Al Bahar - Ice Cream","Currency_Code":""},{"No":"VEND0076","Name":"Alyasra Food Co. - Activia","Currency_Code":""},{"No":"VEND0083","Name":"Diet Care Co.","Currency_Code":""},{"No":"VEND0086","Name":"Juiced Refreshments Est.","Currency_Code":""},{"No":"VEND0120","Name":"Cherriez International W.L.L","Currency_Code":""},{"No":"VEND0145","Name":"Almarai Co.","Currency_Code":""},{"No":"VEND0173","Name":"B2B services Company","Currency_Code":""},{"No":"VEND0174","Name":"Le Royal Group","Currency_Code":""},{"No":"VEND0178","Name":"Al Mersal Trading Co","Currency_Code":""},{"No":"VEND0188","Name":"Formula Company","Currency_Code":""},{"No":"VEND0193","Name":"Sweetcase","Currency_Code":""}]}
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [], columns: []
        };
    }
    syncData(){
    var col = [];
    var vendApiData = [];
    const user = 'test';
    const pass = '123@Test';
    const token = "Basic " + base64.btoa("Test:123@Test");
            fetchWrapper(`${navUrl}/Vendors?$format=json`,token, 'POST' )
    .then((response) => {

      if (response.ok) {
        response.json().then(responseJson =>{
            this.setState(this.state.data = responseJson.value)
            console.log(responseJson.value)
        }
        )
      } else {
         alert('error in finding vendor')
      }
    })


    for (var key in vendorData.value[0]) {
        col.push({
            key: key,
            name:  key,
            fieldName:  key,
            minWidth: vendorData.value[0][key].toString().length*10,
            maxWidth: vendorData.value[0][key].toString().length*10,
            isPadded: true,
            isRowHeader: true,

        isResizable: true,
        });
    }
    this.setState(this.state.columns=col)
    this.setState(this.state.data=vendorData.value)

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
