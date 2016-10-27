const promisifyGet = require('./00-promisifyRequest.js').promisifyGet;

// This script accepts a query to search by artist on Spotify's api
// for example if in your terminal you type "node 01-singlePromise.js asheru"
// then artist will be "asheru".
// more details: https://nodejs.org/docs/latest/api/process.html#process_process_argv
if(!module.parent){
  var artist = process.argv[2];
  console.log(artist);
  searchSpotify(artist)
}

/**
 * Your goal is to cause each artist's name (from the returned data) to print to the console
 * using the variable spotifyPromise. Additionally, if the promise is rejected, you should print
 * an error message to the console. We've constructed the URL propperly for you.
 *
 * Additionally, it should return the promise associated with the request.
*/
function searchSpotify(artist) {
  var url = `https://api.spotify.com/v1/search?type=artist&q=${artist}`;
  var value = promisifyGet(url);
  // console.log(url);
  // console.log(value);
  // console.log(Object.keys(value));
  value.then(function(data){
    // console.log(data['artists']);
    // console.log(typeof data);
    var spotifyPromise = JSON.parse(data);
    console.log(spotifyPromise);
  });


}

module.exports = {
  searchSpotify
}
