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
      <div data-spy="scroll" className="container border 4px border-success my-3 rounded">

          <ul>
            {items.articles.map((item,i) => (
              <li key={i}>
                <h3>{item.title}</h3>
                <img src = {item.urlToImage} style={{width:"200px"}}></img>
                <a href = {item.url}><p>Click here to view article</p></a>
              </li>

            ))}
          </ul>
      </div>
    );
  }
}



}

export default Article;