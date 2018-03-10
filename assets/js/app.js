$(document).ready(function() {
  var api =
    "https://api.openweathermap.org/data/2.5/weather?zip=22151&units=imperial&appid=0057bdd2a935145c179f96f0481eead5";


  $.getJSON(api, function(data) {
    var temp = data.main.temp;
    var par = Math.floor((temp/100) * (100));
    if(temp < 50){
      $('#bg').css('background-image', 'url(' + "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" + ')');
      $('h2').text("It is "+par+" outside in Springfield, VA");
    }

  });


});
