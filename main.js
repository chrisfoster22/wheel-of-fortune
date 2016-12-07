$(document).ready(function() {

	var phrase = "Try to guess this phrase";
	var splitPhrase = phrase.split(" ");

	var allLetters = splitPhrase.join('');
	var letterDivs = $(".letter");

	populatePhrase(splitPhrase);

	$('#guessBtn').on('click', function() {
		var guessedLetter = $('#guessInput').val();
		guessLetter(allLetters, guessedLetter, letterDivs)
	});

})

function guessLetter(phrase, letter, letterDivs) {
	if (phrase.indexOf(letter) > -1) {
		var letterIndex = phrase.indexOf(letter);
		$(letterDivs[letterIndex])
	}

}

function populatePhrase(phrase) {
	for (var i = 0; i < phrase.length; i++) {

		var word = $("<div class='word'></div>");
		$("#board").append(word);
		populateLetters(phrase[i]);

	}
}


function populateLetters(word) {

	for (var i = 0; i < word.length; i++) {
		var letter = $("<div class='letter'></div>")
		$('#board').append(letter);
	}


}
