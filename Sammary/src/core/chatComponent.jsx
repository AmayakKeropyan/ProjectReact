import React from 'react';


class Review extends React.Component{

    constructor(props){
        super(props);
        this.state = {data: props.review};
        this.onClick = this.onClick.bind(this);
    }
    onClick(e){
        this.props.onRemove(this.state.data);
    }
    render(){
        return <div className="message">
               
                <img src="../Pictures/x.png" className="delete-note" onClick={this.onClick}></img>
                 <p> {this.state.data.ReviewText}</p>
                <p className="nameLog">{this.state.data.Name}
                </p>
  
                
</div>;
    }
    }

class ReviewForm extends React.Component{

constructor(props){
        super(props);
        this.state = {review: ""};

        this.onSubmit = this.onSubmit.bind(this);
        this.onReviewChange = this.onReviewChange.bind(this);
    }
  
    onReviewChange(e) {
        this.setState({review: e.target.value});
    }
    onSubmit(e) {
        e.preventDefault();
        var reviewReview = this.state.review.trim();
        if (!reviewReview) {
            return;
        }
        this.props.onReviewSubmit({review: reviewReview});
        this.setState({review:""});
    }
    render() {
        return (
            <div>
          <form onSubmit={this.onSubmit}>
              
              <p>
                  <input className="chat-input" type="text"
                         placeholder="Type message..."
                         value={this.state.review}
                         onChange={this.onReviewChange} />
                        <input className="button-chat" type="submit" value="" />
                     
            </p>
           
          </form>
           </div>

        );
              }
}


class Registr extends React.Component{

    constructor(props){
        super(props);
        this.state = {name: ""};

        this.onSubmit = this.onSubmit.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
    }
    onNameChange(e) {
        this.setState({name: e.target.value});
    }
   
    onSubmit(e) {
        e.preventDefault();
        var reviewName = this.state.name.trim();
   
        if (!reviewName) {
            return;
        }
        this.props.onReviewSubmit({ name: reviewName});
        this.setState({name: ""});
    }
    render() {
        return (

        <div className="form">
                      <div className="form-input">
                          <div>
                            <p> USERNAME </p>
                            <div className="input-block">
                                <input id="input-block" type="text" onChange={this.onNameChange}/> 
                            </div>
                            </div>
                            <div className="blue-block">
                                <button onClick={this.onSubmit}> Get Started </button>
                            </div>
                     </div>
               
                  </div>
                  

        );
              }
}
export default class ReviewsList extends React.Component{

    constructor(props){
        super(props);
        this.state = { reviews: [] , acountName:""};

        this.onAddReview= this.onAddReview.bind(this);
        this.onAddRev= this.onAddRev.bind(this);
        this.onRemoveReview = this.onRemoveReview.bind(this);
    }
    // загрузка данных
    loadData() {
 
        var xhr = new XMLHttpRequest();
        xhr.open("Get", "/Chat/GetReviews", true);
        xhr.onload = function () {
            var data = JSON.parse(xhr.responseText);
                this.setState({ reviews: data }); 
        }.bind(this);
        xhr.send();
        this.loadDataTime();
    }

    loadDataTime() {
        var xhr = new XMLHttpRequest();
        xhr.open("Get", "/Chat/GetReviews", true);
        xhr.onload = function () {
            var data = JSON.parse(xhr.responseText);
            if(this.state.reviews==data){
                this.sleep(3000);
            }
            else{
               this.loadData();
            }
            
        }.bind(this);
        xhr.send();
    }

    sleep(millis) {
        var t = (new Date()).getTime();
        var i = 0;
        while (((new Date()).getTime() - t) < millis) {
            i++;
        }
        this.loadDataTime();
    }



    loadChat(name) {
        this.setState({ acountName: name });  
    }

    load() {
        console.log("load");  
       
    }
    

    componentDidMount() {
        var localNotes = localStorage.getItem('name');
        console.log(localNotes);
        if (localNotes){
            this.loadChat(localNotes); 
        }
        this.loadData();
    }

    onAddRev(name) {
        localStorage.setItem('name',name.name);
        this.loadChat(name.name);
    }

    // добавление объекта
    onAddReview(review) {
        if (review) {

            var data = new FormData();
            data.append("name", localStorage.getItem('name'));
            data.append("reviewtext", review.review);
            var xhr = new XMLHttpRequest();
            xhr.open("Post", "/Chat/AddReview", true);
            xhr.onload = function () {
                if (xhr.status == 200) {
                    this.loadData();
                }
            }.bind(this);
            xhr.send(data);
        }
       
    }
    // удаление объекта
    onRemoveReview(review) {

        if (review) {
            var data = new FormData();
            data.append("id", review.Id);
            var xhr = new XMLHttpRequest();
            xhr.open("Post", "/Chat/DeleteReview", true);
            xhr.onload = function () {
                if (xhr.status == 200) {
                    this.loadData();
                }
            }.bind(this);
            xhr.send(data);
        }
    }

   
   
    render(){

        var remove = this.onRemoveReview;
        if(this.state.acountName!=""){
            return <div  className="form2">
                <p className="test-solution"> Тестовое задание </p>
                <div className="box-message" >
                    <div className="box-scroll">
                    {
                        this.state.reviews.map(function(review){

                            return <Review key={review.Id} review={review} onRemove={remove} />
                            })
                    }
                </div>
                </div>
                 <ReviewForm onReviewSubmit={this.onAddReview} />
        </div>;
        }
        else{

            return  <Registr onReviewSubmit={this.onAddRev} />;

        }
    }
}

