const promisifyGet = require('./00-promisifyRequest.js').promisifyGet;
const searchSpotify = require('./01-singlePromise.js').searchSpotify;

// This script relies on the previous step to search for an artist, but additionally should query for
// all of the albums that artist has on spotify. This time you'll have to find the appropriate url
// using the API reference documentation.
if(!module.parent){
  var artist = process.argv[2];
  searchAndFetchAlbums(artist);
}
// *albums 	/v1/artists/{id}/albums
/**
* This function should use searchSpotify to search for the artist, then
* once the artist list comes back, take the first artist and request the
* albums associated with that artist. Once we have the album list, our function
* should print the album names to the console.
*
* Once again, if any errors occur, the
* function should print an error message.
*/
function searchAndFetchAlbums(artist) {

}
