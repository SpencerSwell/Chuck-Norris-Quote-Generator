'use strict';
var baseUrl = 'http://api.icndb.com/jokes/random';
var categoryURL = ''

function getDataFromApi () {
	$.getJSON(baseUrl, function (quote) {
		renderQuote(quote);
	})
}


function renderQuote (quote) {
	$('.js-quote-box').html('<q>' + quote.value.joke + '</q>' + '<br />' + '<br />');

}

//event handlers



$('.js-quote-generator').on('click', function() {
	getDataFromApi();
})

$('.dropdown-content').on('click', '.Nerdy', function() {
	baseUrl = "http://api.icndb.com/jokes/random";
	baseUrl += '?limitTo=[nerdy]';
	console.log(baseUrl);


})

$('.dropdown-content').on('click', '.Explicit', function() {
	baseUrl = "http://api.icndb.com/jokes/random";
	baseUrl+= '?limitTo=[explicit]';
	console.log(baseUrl);


})

$('.dropdown-content').on('click', '.NerdyAndExplicit', function() {
	baseUrl = 'http://api.icndb.com/jokes/random';
	console.log(baseUrl);


})

$('.nameChange').on('submit', function(event) {
 	baseUrl = 'http://api.icndb.com/jokes/random';
	var firstName  = $('.fn').val();
	var lastName = $('.ln').val();
	baseUrl+= `?firstName=${firstName}&lastName=${lastName}`;
	console.log(baseUrl);
	event.preventDefault();

});