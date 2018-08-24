var batWords = ["bruce", "wayne", "pennyworth", "scarecrow", "bane"];

var lettersGuessed = [];
var lettersCorrect = [];
var guessRemaining = 8;
var wins = 0;
var losses = 0;
var answerArray = [];

//Add the text stuff here
var directionsText = document.getElementById("directionTextID");
var winsText = document.getElementById("winsTextID");
var currentWordText = document.getElementById("currentWordTextID");
var guessRemainingText = document.getElementById("guessRemainingTextID");
var letterGuessedText = document.getElementById("letterGuessedTextID");


document.getElementById("directionTextID").addEventListener("click", function() {
    var computerGuess = batWords[Math.floor(Math.random() * batWords.length)];
    console.log("Computer Selects: "+computerGuess)

    for (var i = 0; i < computerGuess.length; i++) {
        answerArray[i] = " _ ";
    }

    directionsText.textContent = "";

    winsText.textContent = "Wins: "+ wins;
    currentWordText.textContent = "Current Word:   " + answerArray;
    guessRemainingText.textContent = "Lives Left: "+ guessRemaining;
    letterGuessedText = "Letters Guessed:" + lettersGuessed;
}, true);

//Function
document.onkeydown = function(event) {
    var userGuess = event.key;

    //Hide Direction
    console.log("userGuess: "+userGuess);

}

