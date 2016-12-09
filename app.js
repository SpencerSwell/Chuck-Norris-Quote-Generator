'use strict';
var baseUrl = 'http://api.icndb.com/jokes/random';
var categoryURL = ''
var fn;
var ln;
function getDataFromApi () {
  $.getJSON(baseUrl, function (quote) {
    renderQuote(quote);
  })
}


function renderQuote (quote) {
  $('.js-quote-box').html('<q>' + quote.value.joke + '</q>' + '<br />' + '<br />')

}

//event handlers



$('.js-quote-generator').on('click', function() {
 console.log(baseUrl);
  getDataFromApi();
})

$('.dropdown-content').on('click', '.Nerdy', function() {
  baseUrl = "http://api.icndb.com/jokes/random";
  baseUrl += '?limitTo=[nerdy]';
  console.log(baseUrl);
if(fn && ln) {
    baseUrl +=`&firstName=${fn}&lastName=${ln}`;
    console.log(baseUrl);
  }

})

$('.dropdown-content').on('click', '.Explicit', function() {
  baseUrl = "http://api.icndb.com/jokes/random";
  baseUrl+= '?limitTo=[explicit]';
  console.log(baseUrl);
    if(fn && ln) {
      baseUrl +=`&firstName=${fn}&lastName=${ln}`;
      console.log(baseUrl);
    }


})

$('.dropdown-content').on('click', '.NerdyAndExplicit', function() {
  baseUrl = 'http://api.icndb.com/jokes/random?limitTo=[nerdy]&limitTo=[explicit]';
  console.log(baseUrl);
    if(fn && ln) {
    baseUrl +=`&firstName=${fn}&lastName=${ln}`;
    console.log(baseUrl);
  }



})

$('.nameChange').on('submit', function(event) {
  baseUrl = 'http://api.icndb.com/jokes/random';
  var firstName  = $('.fn').val();
  var lastName = $('.ln').val();
  baseUrl+= `?firstName=${firstName}&lastName=${lastName}`;
  console.log(baseUrl);
   fn = firstName;
  console.log(fn);
   ln = lastName;
  event.preventDefault();
});


$('.reset').on('click', function () {
  console.log(fn);
 baseUrl='http://api.icndb.com/jokes/random';
  fn = undefined;
  ln = undefined;
  console.log(fn);
  console.log(baseUrl);

})