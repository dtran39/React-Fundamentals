var axios = require('axios'); // make ajax request
// For getting access to api
var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;
//
function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param);

}
var helpers = {
  getPlayersInfo: function(players){
    /* axios.all takes in array of promises
      When each of these promises has resolved,
        the callback passed in then() will be run
    */
    return axios.all(players.map(function(username) {
      return getUserInfo(username);
    })).then(function(info){
      // console.log(info);
      return info.map(function(user){
        return user.data;
      })
    }).catch(function(err){
      // Catching errors
      console.warn('Error in getPlayersInfo', err);
    });
  }
};
module.exports = helpers;
