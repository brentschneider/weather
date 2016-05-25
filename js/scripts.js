// First, load jQuery (required)
// jQuery 2.2.2 loaded via `index.html`

// Second, load Semantic UI JS (required)
// @codekit-prepend "semantic.js";

// Third, Add to Homescreen (optional)
// @codekit-prepend "add-to-homescreen.js";

// Third, load any plugins (optional)
// @codekit-prepend "plugins.js";

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
    },

    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });



});
