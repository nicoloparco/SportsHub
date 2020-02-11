import React from "react";

class Score extends React.Component{
    state = {
        scoresHome: [],
        scoresAway: []
    }


componentDidMount() {
const axios = require("axios");
let APIKEY ="f66zurdw5t36r9jqz6jwg58h"
axios({
    "method":"GET",
    // Game score url 
    "url":"http://api.sportradar.us/nba/trial/v7/en/games/2d8e835b-ad60-4f7e-bc7f-fe4f2375f8bd/summary.json?api_key=" + APIKEY , 
    "headers":{
    "content-type":"application/json;charset=utf-8",
    "SportsRadar-host":"http://api.sportradar.us",
    "SportsRadarkey":"f66zurdw5t36r9jqz6jwg58h"
    },"params":{
    "include":["all_periods","scores", "current_time"]
    }
    })
    .then((response)=>{
    console.log(response.data.home.scoring)
    console.log(response.data.away.scoring)
    const scoresHome = response.data.home.scoring;
    const scoresAway = response.data.away.scoring;
    this.setState({ scoresHome })
    this.setState({ scoresAway })

    })
    .catch((error)=>{
      console.log(error)
    })
};

render() {
    return (
        <div className = "container">
            <ul>
                { this.state.scoresHome.map(score => <li>{score.points}</li>)}
            </ul>
            <ul>
                { this.state.scoresAway.map(score => <li>{score.points}</li>)}
            </ul>
        </div>
        )
    }
}

  export default Score;
