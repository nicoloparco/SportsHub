const axios = require("axios");

axios({
    "method":"GET",
    "url":"https://therundown-therundown-v1.p.rapidapi.com/sports/2/events/2020-02-02?include=scores",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"therundown-therundown-v1.p.rapidapi.com",
    "x-rapidapi-key":"19ac5a7a60msh8545de09935714cp1bfbb7jsn32699f442fcd"
    }
    })
    .then((response)=>{
      console.log(response.data.events)
    })
    .catch((error)=>{
      console.log(error)
    })