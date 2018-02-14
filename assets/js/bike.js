export let promise = function(perPage, location, distance) {
  return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&per_page=${perPage}&proximity=${location}&proximity_square=${distance}`;
    console.log(url);
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };
    request.open("GET", url, true);
    request.send();
  });
};
