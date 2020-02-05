
const axios = require("axios");

let APIKEY ="7pswgaqu3wjuumpxqyxdfcvx"

axios({
    "method":"GET",
    "url":"http://api.sportradar.us/mlb/trial/v6.6/en/games/2019/04/01/boxscore.json?api_key=" + APIKEY,
    "headers":{
    "content-type":"application/json;charset=utf-8",
    "SportsRadar-host":"http://api.sportradar.us",
    "SportsRadarkey":"7pswgaqu3wjuumpxqyxdfcvx"
    },"params":{
    "include":["",
    "Score"]
    }
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })