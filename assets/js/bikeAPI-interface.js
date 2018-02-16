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
      $('#result').append("<h2>" + body.bikes[i].title + "</h2>" + "<br>" + "<p>" + body.bikes[i].frame_colors + "</p>" + "<p>" + "ID #" + body.bikes[i].id + "</p>");
      if (body.bikes[i].thumb === null) {
         $('#result').append("<p><em> No image found </em></p>" + "<hr>");
       } else {
           $('#result').append('<img class="bikeImg" src=' + body.bikes[i].thumb + '>' + "<hr>");
       }
    }
    }, function (error) {
      $('.showErrors').text('There was an error: ${error.message}');


  });
});

});
