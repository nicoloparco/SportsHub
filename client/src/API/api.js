const axios = require("axios");
function API() {axios({
    "method":"GET",
    "url":"https://therundown-therundown-v1.p.rapidapi.com/sports/5/events",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"therundown-therundown-v1.p.rapidapi.com",
    "x-rapidapi-key":"88046d4f37mshf957197ba644ddcp1d233fjsnceeb0cbf91c6"
    },"params":{
    "include":["all_periods",
    "scores"]
    }
    })
    .then((response)=>{
      var teamNameData = response.data.events[0].teams_normalized;
      var scoreSpreadData = response.data.events[0].lines[1].spread;
      var scoreTotalData = response.data.events[0].lines[1].total
      
      var awayTeam = {
         awayName: teamNameData[0].name + " " + teamNameData[0].mascot + " " + teamNameData[0].abbreviation,
         awayRank: "Rank: " + teamNameData[0].ranking,
         awayRecord: "Record: " + teamNameData[0].record,
      }
      var homeTeam = {
         awayName: teamNameData[1].name + " " + teamNameData[1].mascot + " " + teamNameData[1].abbreviation,
         awayRank: "Rank: " + teamNameData[1].ranking,
         awayRecord: "Record: " + teamNameData[1].record,
      }
      var scoreSpread = {
          spreadAway: scoreSpreadData.point_spread_away,
          spreadHome: scoreSpreadData.point_spread_home,
          spreadAwayOdds: scoreSpreadData.point_spread_away_money,
          spreadHomeOdds: scoreSpreadData.point_spread_home_money,
          dateUpdated: scoreSpreadData.date_updated
      }
      var scoreTotal = {
          totalOver: scoreTotalData.total_over,
          totalUnder: scoreTotalData.total_under,
          overOdds: scoreTotalData.total_over_money,
          underOdds: scoreTotalData.total_under_money,
          dateUpdated: scoreTotalData.date_updated
      }
      
      console.log(awayTeam)
      console.log(homeTeam)
      console.log(scoreSpread)
      console.log(scoreTotal)
    })
    .catch((error)=>{
      console.log(error)
    })
}

    export default API;