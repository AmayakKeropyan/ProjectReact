import React from 'react';
import '../app.less';
export default class Navigator extends React.Component {
    render() {
        return (
   
  <div >  
    
   <div className="col-md-3 menu-left">
       <h4 className="scills"> Примеры функционала: </h4>
        <a href="/#/"> <button type="button" className="btn btn-default btn-lg btn-block">Главная</button></a>
      <a href="/#/search"> <button type="button" className="btn btn-default btn-lg btn-block">Организация поиска</button></a>
      <a href="/#/reviews"> <button type="button" className="btn btn-default btn-lg btn-block">Работа с сервером</button></a>
      <a href="/#/basic_js"> <button type="button" className="btn btn-default btn-lg btn-block">Основы JavaScript</button></a>
      <a href="/#/basic_c"> <button type="button" className="btn btn-default btn-lg btn-block">Основы C#</button></a>
       <a href="/#/chat"> <button type="button" className="btn btn-default btn-lg btn-block">Чат</button></a>
        <a href="/#/newspaper"> <button type="button" className="btn btn-default btn-lg btn-block">Новости</button></a>
      <a href="/#/developer"> <button type="button" className="btn btn-default btn-lg btn-block">Обо мне</button></a>
</div>

  
    </div>

        )
    }
}