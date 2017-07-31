import React from 'react';

export class Navigation extends React.Component {

  render() { 
    return (
  
    <div className="col-md-3 menu-left"> 
       <h4> Примеры функционала: </h4>
        <a href="/#/"> <button type="button" className="btn btn-default btn-lg btn-block">Главная</button></a>
      <a href="/#/search"> <button type="button" className="btn btn-default btn-lg btn-block">Организация поиска</button></a>
      <a href="/#/d"> <button type="button" className="btn btn-default btn-lg btn-block">Работа с json объектом</button></a>
      <a href="/#/d"> <button type="button" className="btn btn-default btn-lg btn-block">Block level button 333</button></a>
      <a href="/#/d"> <button type="button" className="btn btn-default btn-lg btn-block">Block level button 444</button></a>
      <a href="/#/d"> <button type="button" className="btn btn-default btn-lg btn-block">Разработчики</button></a>
</div>
  


    )
  }
}

