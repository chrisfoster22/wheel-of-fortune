$(document).ready(function() {

	var phrase = "try to guess this phrase";
	var splitPhrase = phrase.split(" ");

	var allLetters = splitPhrase.join('').split('');


	populatePhrase(splitPhrase);

	$('#guessBtn').on('click', function() {
		var guessedLetter = $('#guessInput').val();
		guessLetter(guessedLetter)
	});

	function guessLetter(letter) {
		if (allLetters.indexOf(letter) > -1) {
			var letterDivs = $(".unguessed");
			var letterIndex = allLetters.indexOf(letter);
			$(letterDivs[letterIndex]).append(letter.toUpperCase());
			$(letterDivs[letterIndex]).removeClass("unguessed");
			allLetters.splice(letterIndex, 1);
			guessLetter(letter);
		}

	}

})

function populatePhrase(phrase) {
	for (var i = 0; i < phrase.length; i++) {

		var word = $("<div class='word'></div>");
		$("#board").append(word);
		populateLetters(word, phrase[i]);

	}
}


function populateLetters(word, phrase) {

	for (var i = 0; i < phrase.length; i++) {
		var letter = $("<div class='letter unguessed'></div>")
		word.append(letter);
	}


}
