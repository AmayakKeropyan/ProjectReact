import React from 'react';
import Navigator from './navigator.jsx';
import Info from './info.jsx';
import ScillsInfo from './scillsInfo.jsx';
import SearchComponent from './searchComponent.jsx';
export default class Search extends React.Component {
    render() {
        return (
   
  <div >  
      <Info />
      <Navigator />
      <div className="col-md-6 contt"> 
      <SearchComponent />



      </div>
     <ScillsInfo />
    </div>

        )
    }
}