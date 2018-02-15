import {promise} from "./../assets/js/bike.js";

$(document).ready(function() {
  $('#bike-form').submit(function(event) {
    event.preventDefault();
    let distance = $('#distance').val();
    let location = $('#location').val();
    let perPage = $('#per-page').val();
    let newSearch = promise(perPage, location, distance);


    newSearch.then(function(response) {
      let body = JSON.parse(response);
      $('#result').append("<li>" + body.bikes[0].title + "</li>");
      $('#result').append("<li>" + body.bikes[0].id + "</li>");
    }, function (error) {
      $('.showErrors').text('There was an error: ${error.message}');
    });
  });
});
