import React from 'react';

export default class BasicJSComponent extends React.Component {
    render() {
        return (
    <div>
    
 <h3>Ссылка на репрозиторий GitHub: <a target="_blank" href="https://github.com/PortfolioAccount/Projects/tree/master/JS"> Projects / JS </a></h3>
        <hr /><h4>Содержание: </h4>
         <div className="Task">
            <ul>
                <li className="Taskli">Task 1: Задание на удаление из символов из текста по условию</li>
                <li className="Taskli">Task 2: Задание на выполнение арифметических операций в тексте</li>
                <li className="Taskli">Task 3: Работа с DOM-Деревом.</li>
        </ul>
        </div>
       
  

       
  
    </div>
    
    )
        }
}