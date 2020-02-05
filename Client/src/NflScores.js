
const axios = require("axios");

let APIKEY ="hrgmz4w9rjhn8993rf8nwf69"

axios({
    "method":"GET",
    "url":"http://api.sportradar.us/nfl/official/trial/v5/en/games/02b13817-bfd1-4e61-820a-55f9d8e4d36e/boxscore.json?api_key=" + APIKEY,
    "headers":{
    "content-type":"application/json;charset=utf-8",
    "SportsRadar-host":"http://api.sportradar.us",
    "SportsRadarkey":"hrgmz4w9rjhn8993rf8nwf69"
    },"params":{
    "include":["all_period",
    "scores"]
    }
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })