import React from 'react';


var News = [
{
    id: new Date()+Math.random(),
    name: 'Commodo qui incididunt',
    textComment: "Победитель конкурса по веселым стартам в Лихтенштейна вызван в сборную своей страны по футболу.",

    reply: [
    {
        id: new Date()+Math.random(),
        name: 'Ivan',
        textComment: "Пацан к успеху идет!"
    },
    {
        id: new Date()+Math.random(),
        name: 'Fedya_001',
        textComment: "Главное поставить цель и идти к ней!"
    },
    {
        id: new Date()+Math.random(),
        name: 'Эндрю',
        textComment: "Спасиба я вас не подводить!!!"
    }
    ]
},
{
    id: new Date()+Math.random(),
    name: 'Quis occaecac',
    textComment: "Победитель конкурса по веселым стартам в Лихтенштейна, вызванный в сборную своей страны по футболу, начал активно тренироваться 24 часа в сутки 7 дней в неделю!",

    reply: [
    {
        id: new Date()+Math.random(),
        name: 'Maksim',
        textComment: "Молодец!"
    },
    {
        id: new Date()+Math.random(),
        name: 'Jora_Jora',
        textComment: "Буду активно за ним следить!"
    },
    {
        id: new Date()+Math.random(),
        name: 'Эндрю',
        textComment: "Спасиба я вас никогда не подводить!!!"
    }
    ]
},
{
    id: new Date()+Math.random(),
    name: 'Hello my new world',
    textComment: "Знаменитого Эндрю Милоша наградил президент Лихтенштейна, за стремление и доблесть!",

    reply: [
     {
         id: new Date()+Math.random(),
         name: 'Petro',
         textComment: "О, слышал о нем! Говорят он самый популярный в своей стране!"
     }
    ]
},
{
    id: new Date()+Math.random(),
    name: 'Voluptate est officia',
    textComment: "Эндрю Милош расскрыл секрет своих тренировок! Все дело в том, что очень много времени я провожу на пляжах, бегая по песку. Это делает меня более быстрым и выносливым! - поделился с нами знаменитый уже на весь мир Эндрю!",

    reply: [
     {
         id: new Date()+Math.random(),
         name: 'Stepan',
         textComment: "В последнее время все о нем и говорят!"
     },
     {
         id: new Date()+Math.random(),
         name: 'Katya',
         textComment: "А он симпа =)"
     }
    ]
},
{
    id: new Date()+Math.random(),
    name: 'Ex sunt sunt aliqua',
    textComment: "От участника веселых стартов, до первых знаменитостей мира!",

    reply: [
    {
        id: new Date()+Math.random(),
        name: 'BoryaMorya',
        textComment: "Не то что наши футболисты!"
    },
    {
        id: new Date()+Math.random(),
        name: 'Fedya_001',
        textComment: "А я верил в него с самого начала! Можете по предыдущим статьям посмотреть!"
    },
    {
        id: new Date()+Math.random(),
        name: 'Эндрю',
        textComment: "Спасиба я вас обещать вас не подводить, я выполнять обещание свой! Я до сейчас простой человек!"
    }
    ]
},
{
    id: new Date()+Math.random(),
    name: 'Commodo laborum sit nostru',
    textComment: "Ходят слухи, что Эндрю Милоша позвали в Мюнхенскую Баварию!",

    reply: [
     {
         id: new Date()+Math.random(),
         name: 'Aleshka',
         textComment: "ООО, ждем ждем!!!"
     }
    ]
},
{
    id: new Date()+Math.random(),
    name: 'Lorem Ipsum dolor',
    textComment: "Эндрю прибыл в Германию! Самые свежие новости только у нас!",

    reply: [
     {
         id: new Date()+Math.random(),
         name: 'Artem007',
         textComment: "Ох и карьера у этого чувака!!!"
     }
    ]
}
]


var NewsBox = React.createClass({
  
    onClick(event){
        var comm = document.getElementById(this.props.id);
        if(comm.style.display=="none"){
            comm.style.display="block";
            event.target.innerText="Закрыть комментарии";
            }
        else { comm.style.display="none";
            event.target.innerText="Открыть комментарии";}
        
    },

    onClick2(event){
        var comm2 = document.getElementById(this.props.id+1);
        if(comm2.style.display=="none"){
            comm2.style.display="block";
        }
        else { comm2.style.display="none";
          }
        
    },

    render: function(){
        const divStyle = {
           display:"none" ,
        };
        return (<h4><li>
            <div className="titleNews" onClick={this.onClick2}>{this.props.name}</div>
            <h5>
            <div id={this.props.id+1} style={divStyle}>
            <div className="textNews">{this.props.textComment}</div>
            <button  onClick={this.onClick}>Открыть комментарии</button>
            <div id={this.props.id} style={divStyle}>{
                this.props.reply.map(function(el){
                    return <Comment 
                    name={el.name}
                    key={el.id} 
                    textComment = {el.textComment} 
                        />;
                })
            }
            </div>
            </div>
            </h5>
    </li></h4>);
    }
});

                    var Comment = React.createClass({
                        render: function(){
                            return (
                                    
                                      <div>
                                          <div className="commentName">Комментарий от: {this.props.name}</div>
                                          
                                           <h6>Текст комментария: {this.props.textComment}</h6>
                                      </div>
                                   
                        );
                        }
                    });

var NewstList = React.createClass({
   
    render: function(){
        return (
                <div className="bodyNewsList">
            <ul>
                {
                        News.map(function(el){
                            return <NewsBox 
                                 name={el.name}
                                 key={el.id} 
                                 id={el.id} 
                                 textComment = {el.textComment} 
                                 reply = {el.reply}
                                     />;
                    })
                }
            </ul>
        </div>
)
}
});

export default NewstList;