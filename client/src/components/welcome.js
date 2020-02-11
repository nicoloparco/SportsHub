import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PostList from "./blog/post_list";






class Welcome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount(){

    fetch('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=878f0b51b8a143b1b6efda15a5c88184')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    });

  }

  render(){
    var{ isLoaded, items} = this.state;

    if(!isLoaded){
      return <div>loading...</div>;
    }
    else{

    return(
      <div className= "col-md-7">
      <div className = "container my-1 mx-1">
      <div className="container" id="scrollbar" data-target="articles" style={{overflow:"scroll", height:"750px"}}>
      <PostList />
  
            {items.articles.map((item,i) => (
              <div key={i} className = "container border  my-3" id = "articles" >
                  <section id ="scrollArticle"></section>
                <a href = {item.url} style={{textDecoration: "none"}}> <h3 className="mt-3" style = {{color:"black"}}>{item.title}</h3> </a>
                <div className="row">
                    <div className="col-md-4"><img className = "img-thumbnail my-2" src = {item.urlToImage} style = {{width:"auto", height:"150px"}} alt="livearticles"></img></div>
                    <div className="col-md-8"><p className ="my-4">{item.description}</p></div>
                </div>
                <div className = "articleButtons my-1 text-right">
                    <div className = "articleComments d-inline">
          
                            
                <Link className = "btn btn d-inline commentButton" to="/comments/new" style = {{backgroundColor: "white"}}><i className="fas fa-comments"></i></Link>
          
                    </div>
                    
                </div>
            </div>
            ))}
          
      </div>
      </div>
      </div>
    );
  }
}



}

export default Welcome;