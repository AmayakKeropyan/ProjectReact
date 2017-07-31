import React from 'react';
import Navigator from './navigator.jsx';
import Info from './info.jsx';
import ScillsInfo from './scillsInfo.jsx';
import C_SharpComponent from './c_sharpComponent.jsx';
export default class C_Sharp extends React.Component {
    render() {
        return (
   
  <div >  
      <Info />
      <Navigator />
      <div className="col-md-6 contt"> 
      <C_SharpComponent />



      </div>
     <ScillsInfo />
    </div>

        )
    }
}