$(document).ready(function() {

	var guessInput = $("#guessInput");
	guessInput.focus();
	var phrase = "The world is a vampire";
	var splitPhrase = phrase.split(" ");

	var allLetters = splitPhrase.join('').split('');

	guessInput.on("keydown", function(event) {
		if (event.key === "Enter") {
			guessLetter(guessInput.val());
		}
	})

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
		$("#guessInput").val("");
		$("#guessInput").focus();

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
		var letter;
		if (phrase[i] === "'") {
			letter = $("<div class='letter'>'</div>") 
		} else {
			letter = $("<div class='letter unguessed'></div>")
		}
		word.append(letter);
	}


}
