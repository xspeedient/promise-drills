const promisifyGet = require('./00-promisifyRequest.js').promisifyGet;

// This script provides a list of spotify track_ids. Your goal is to use
// promise.all to wait for all the tracks to come back, then sort the tracks
// by their popularity score, then print them to the screen.
if(!module.parent){
  let ids = [
    '6mtaOmTq5VIokY0W6JcESj',
    '7i0FlkCsuxuP6bAgeYSNqL',
    '1O4ZL7r5Rs34VT6aUiF9dR',
    '60mhrkENv5lrEMCMHDWuMz',
    '4X5txV4Lc1i1StwJB9ktQN',
    '5rQRzB4iHzm5oqknJSP7Rx',
    '3xZkT79y5W1nOKQir8nfFu',
    '5ZvCdDRZkmAopY0mQlKv6u',
    '0tZsstgp30IqEYqRedVLa1',
    '2YQgMuG9YmsykJgx8eUBHr',
    '4legIpJJrkg9WwYdH3uvKN'
  ];

  printByPopularity(trackIds);

}

/**
 * Make a series of API requests, one for each trackId. Wait for all the requests
 * to return, then sort the tracks by popularity, and print their names and popularity
 * to the users console.
 *
 * Once again, if any errors occur, the
 * function should print an error message.
 */
function printByPopularity(trackIds){

}


// Bonus Points: Can you write more functions
// that allow you to request all the tracks
// from ALL the albums of a given artist
// and display THOSE in order of popularity?
