import {promise} from "./../assets/js/bike.js";

$(document).ready(function() {
  $('#bike-form').submit(function(event) {
    event.preventDefault();
    let distance = $('#distance').val();
    let location = $('#location').val();
    let perPage = $('#per-page').val();
    let newSearch = promise(perPage, location, distance);
    $('#result').empty();

    newSearch.then(function(response) {
      let body = JSON.parse(response);
      for (let i = 0; i < body.bikes.length; i++) {
      $('#result').append("<div class='box'>" + "<h2>" + body.bikes[i].title + "</h2>" + "<li>" + "ID #" + body.bikes[i].id + "</li>" + "</div>");
      if (body.bikes[i].thumb === null) {
         $('#result').append("<p><em> No image found </em></p>");
       } else {
           $('#result').append('<img src =' + body.bikes[i].thumb + '>');
       }
    }
    }, function (error) {
      $('.showErrors').text('There was an error: ${error.message}');


  });
});
});
