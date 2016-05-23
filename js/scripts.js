// First, load jQuery (required)
// jQuery 2.2.2 loaded via `index.html`

// Second, load Semantic UI JS (required)
// @codekit-prepend "semantic.js";

// Third, Add to Homescreen (optional)
// @codekit-prepend "add-to-homescreen.js";

// Third, load any plugins (optional)
// @codekit-prepend "plugins.js";

// My Scripts
$(document).ready(function() {
  $.simpleWeather({
    location: 'Cheney, WA',
    woeid: '',
    unit: 'f',
    success: function(weather) {

      $(".city").html(weather.city);
			$(".temp").html(weather.temp);
      $('i').addClass( 'icon-' + weather.code );

    },
    error: function(error) {
      console().log( error );
      $("#weather").html('<p>'+error+'</p>');
    }
  });

});
