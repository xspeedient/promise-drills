var request = require('request');

/**
 * This function accepts a url, initiates a GET request based on that
 * url, and returns a Promise associated with that request. The Promise
 * rejects if there is an error of any kind, and resolves if the data
 * comes back successfully.
 */

function promisifyGet(url) {
  return new Promise(function(resolve, reject) {
    request.get(url, function(error, response, body) {
      if(error) {
          reject(error);
      }
      else {
          resolve(response);
      }
    });
  });
}


module.exports = {
  promisifyGet
}
