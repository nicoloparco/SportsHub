import React, {Component} from 'react';

class Article extends Component {

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
      <div className="container border 4px border-success my-3 rounded">

          <ul>
            {items.articles.map((item,i) => (
              <li key={i}>
                <h3>Title</h3>: {item.title} | url: {item.url} |{item.urlToImage}
              </li>

            ))}
          </ul>
      </div>
    );
  }
}



}

export default Article;