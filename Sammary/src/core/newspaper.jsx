import React from 'react';
import Navigator from './navigator.jsx';
import Info from './info.jsx';
import ScillsInfo from './scillsInfo.jsx';
import NewspaperComponent from './newspaperComponent.jsx';

export default class Newspaper extends React.Component {
    render() {
        return (
   
  <div >  
      <Info />
      <Navigator />
      <div className="col-md-6 contt"> 
      <NewspaperComponent />



      </div>
     <ScillsInfo />
    </div>

        )
    }
}