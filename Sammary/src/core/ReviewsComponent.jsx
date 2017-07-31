import React from 'react';
import Navigator from './navigator.jsx';
import Info from './info.jsx';
import ScillsInfo from './scillsInfo.jsx';
import Reviews from './reviews.jsx';

export default class Search extends React.Component {
    render() {
        return (
   
  <div >  
      <Info />
      <Navigator />
      <div className="col-md-6 contt"> 
      <Reviews />



      </div>
     <ScillsInfo />
    </div>

        )
    }
}