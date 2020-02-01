
const axios = require("axios");

let APIKEY ="f66zurdw5t36r9jqz6jwg58h"

axios({
    "method":"GET",
    "url":"http://api.sportradar.us/nba/trial/v7/en/games/22ca891e-3589-40d1-b9ca-31196c83b883/boxscore.json?api_key=" + APIKEY,
    "headers":{
    "content-type":"application/json;charset=utf-8",
    "SportsRadar-host":"http://api.sportradar.us",
    "SportsRadarkey":"f66zurdw5t36r9jqz6jwg58h"
    },"params":{
    "include":["all_periods",
    "scores"]
    }
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })