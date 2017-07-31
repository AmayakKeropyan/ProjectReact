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
        return <div className="box">
                <button className="delete-note" onClick={this.onClick}>Х</button>
                <p><b>{this.state.data.Name}:  </b>
                 {this.state.data.Date} </p>
                <p> {this.state.data.ReviewText}</p>
                
        </div>;
    }
}

class ReviewForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {name: "", review: ""};

        this.onSubmit = this.onSubmit.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onReviewChange = this.onReviewChange.bind(this);
    }
    onNameChange(e) {
        this.setState({name: e.target.value});
    }
    onReviewChange(e) {
        this.setState({review: e.target.value});
    }
    onSubmit(e) {
        e.preventDefault();
        var reviewName = this.state.name.trim();
        var reviewReview = this.state.review.trim();
        if (!reviewName || !reviewReview) {
            return;
        }
        this.props.onReviewSubmit({ name: reviewName, review: reviewReview});
        this.setState({name: "",review:""});
    }
    render() {
        return (
          <form onSubmit={this.onSubmit}>
              <p>
                  <textarea className="text-input" type="text"
                         placeholder="Введите текст..."
                         value={this.state.review}
                         onChange={this.onReviewChange} />
              </p>
            <p>
                <input className="name-input" type="text"
                       placeholder="Введите ваше имя..."
                       value={this.state.name}
                       onChange={this.onNameChange} />
                       <input className="button-input" type="submit" value="Отправить" />
            </p>
            
          </form>
        );
              }
}

export default class ReviewsList extends React.Component{

    constructor(props){
        super(props);
        this.state = { reviews: [] };

        this.onAddReview= this.onAddReview.bind(this);
        this.onRemoveReview = this.onRemoveReview.bind(this);
    }
    // загрузка данных
    loadData() {
        var xhr = new XMLHttpRequest();
        xhr.open("Get", "/Reviews/GetReviews", true);
        xhr.onload = function () {
            var data = JSON.parse(xhr.responseText);
            this.setState({ reviews: data });
        }.bind(this);
        xhr.send();
    }
    componentDidMount() {
        this.loadData();
    }
    // добавление объекта
    onAddReview(review) {
        if (review) {

            var data = new FormData();
            data.append("name", review.name);
            data.append("reviewtext", review.review);
            var xhr = new XMLHttpRequest();
            xhr.open("Post", "/Reviews/AddReview", true);
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
            xhr.open("Post", "/Reviews/DeleteReview", true);
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
        return <div>
                <ReviewForm onReviewSubmit={this.onAddReview} />
                <hr />
                
                <div className="box-out" >
                    {
                        this.state.reviews.map(function(review){

                            return <Review key={review.Id} review={review} onRemove={remove} />
                            })
                    }
                </div>
        </div>;
    }
}

