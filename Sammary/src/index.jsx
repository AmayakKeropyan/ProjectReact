import React from 'react';
import ReactDOM from 'react-dom';
import './app.less';
import './news.less';
import {HashRouter,Route} from 'react-router-dom';

import Page from './core/apppage.jsx';
import Search from './core/search.jsx';
import Reviews from './core/reviewsComponent.jsx';
import BasicJS from './core/basicjs.jsx';
import Csharp from './core/c_sharp.jsx';
import Developer from './core/developers.jsx';
import Chat from './core/chat.jsx';
import Newspaper from './core/newspaper.jsx';

ReactDOM.render( 
  
    <HashRouter>
      <div className="cont">
        <Route exact path="/" component={Page} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/reviews" component={Reviews} />
        <Route exact path="/basic_js" component={BasicJS} />
        <Route exact path="/basic_c" component={Csharp} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/newspaper" component={Newspaper} />
        <Route exact path="/developer" component={Developer} />
      </div>
   </HashRouter >,
document.getElementById('app')
);