const axios = require("axios");

let APIKEY ="hrgmz4w9rjhn8993rf8nwf69"

axios({
    "method":"GET",
    // Game score url 
    "url":"http://api.sportradar.us/nfl-ot1/games/3c6d318a-6164-4290-9bbc-bf9bb21cc4b8/boxscore.json?api_key=" + APIKEY , 
    "headers":{
    "content-type":"application/json;charset=utf-8",
    "SportsRadar-host":"http://api.sportradar.us",
    "SportsRadarkey":"hrgmz4w9rjhn8993rf8nwf69"
    },"params":{
    "include":["all_periods","scores", "current_time"]
    }
    })
    .then((response)=>{
      console.log(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })



 
