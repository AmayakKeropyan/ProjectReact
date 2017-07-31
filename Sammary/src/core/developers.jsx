import React from 'react';
import Navigator from './navigator.jsx';
import Info from './info.jsx';
import ScillsInfo from './scillsInfo.jsx';
import DevelopersComponent from './developersComponent.jsx';
export default class C_Sharp extends React.Component {
    render() {
        return (
   
  <div >  
      <Info />
      <Navigator />
      <div className="col-md-6 contt"> 
      <DevelopersComponent />



      </div>
     <ScillsInfo />
    </div>

        )
    }
}