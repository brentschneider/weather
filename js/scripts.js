// First, load jQuery (required)
// jQuery 2.2.2 loaded via `index.html`

// Second, load Semantic UI JS (required)
// @codekit-prepend "semantic.js";

// Third, Add to Homescreen (optional)
// @codekit-prepend "add-to-homescreen.js";

// Third, load any plugins (optional)
// @codekit-prepend "plugins.js";



// Used for tab click
$('.menu .item')
  .tab()
;

// My Scripts
$(document).ready(function() {

  $.simpleWeather({
    location: 'Spokane, WA',
    woeid: '',
    unit: 'f',
    success: function(weather) {

      $("#spokane .city").html(weather.city);
			$("#spokane .temp").html(weather.temp);
			// $(" .cond-code").html(weather.currently);
      $("#spokane i").addClass( 'icon-' + weather.code );

      $('#spokane .d1').html("<p>Tomorrows high: " + weather.forecast[1].high + "</p>");


      if (weather.temp < 50 ) {
          $("body").addClass("cold");
      }else if (weather.temp > 50 ) {
          $("body").addClass("hot");
      } else {
        $("body").addClass("black");
      }

    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }

  });

  $.simpleWeather({
    location: 'Cheney, WA',
    woeid: '',
    unit: 'f',
    success: function(weather) {

      $("#cheney .city").html(weather.city);
			$("#cheney .temp").html(weather.temp);
			// $(" .cond-code").html(weather.currently);
      $("#cheney i").addClass( 'icon-' + weather.code );
      $('#cheney .d1').html("<p>Tomorrows high: " + weather.forecast[1].high + "</p>");
    },

    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });

});








// Note: Plugin has been updated. Use version 3.1
// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js
// Refer: http://simpleweatherjs.com

// Check for GeoLocation Support on Browser
if ('geolocation' in navigator) {
  $('.geolocation').show();
} else {
  $('.geolocation').hide();
  $('#anyCity').prepend('<p>Sorry, Geolocation is not supported</p>');

}


// On Click, Get Geolocation, Call Weather Function
$('#locateMe').click( function() {

    //load weather using your lat/lng coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
        getWeather(position.coords.latitude+','+position.coords.longitude);
    });

});

// Wrap Plugin, in Function to be Called
// Otherwise, runs when page loads
var getWeather = function(location) {

  $.simpleWeather({
    location: location,
    woeid: '',
    unit: 'f',
    success: function(weather) {

      // Display Data
      $('#anyCity .temp').text(weather.temp);
      $('#anyCity .city').text(weather.city);
      $("#anyCity i").addClass( 'icon-' + weather.code );
      $('#anyCity .d1').html("<p>Tomorrows high: " + weather.forecast[1].high + "</p>");

      // Entire weather object
      console.log();
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }

  });

};
