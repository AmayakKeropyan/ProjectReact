import React from 'react';
import Navigator from './navigator.jsx';
import Info from './info.jsx';
import ScillsInfo from './scillsInfo.jsx';
import BasicJSComponent from './basicjsComponent.jsx';
export default class BasicJS extends React.Component {
    render() {
        return (
   
  <div >  
      <Info />
      <Navigator />
      <div className="col-md-6 contt"> 
      <BasicJSComponent />



      </div>
     <ScillsInfo />
    </div>

        )
    }
}