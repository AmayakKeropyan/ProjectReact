import React from 'react';
import '../app.less';
import '../news.less';
import Navigator from './navigator.jsx';
import Info from './info.jsx';
import ContentScills from './contentScills.jsx';
import ScillsInfo from './scillsInfo.jsx';

export default class Apppage extends React.Component {
    render() {
      return (
          <div  className="info">
            <Info />
            <Navigator />
            <ContentScills />
            <ScillsInfo />         
          </div>
    )
  }
}
