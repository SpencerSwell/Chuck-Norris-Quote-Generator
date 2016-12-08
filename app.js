function getDataFromApi () {
	$.getJSON('http://api.icndb.com/jokes/random', function (quote) {
		renderQuote(quote);
	})
}


function renderQuote (quote) {
	$('.js-quote-box').html('<q>' + quote.value.joke + '</q>');

}



$('.js-quote-generator').on("click", function() {
	getDataFromApi();
})
