var batWords = ["bruce", "wayne", "pennyworth", "scarecrow", "bane"];
 //Define vars
var lettersGuessed = [];
var lettersCorrect = [];
var guessRemaining = 8;
var wins = 0;
var losses = 0;
var answerArray = [];
var computerGuess;

//Add the text stuff here
var directionsText = document.getElementById("directionTextID");
var winsText = document.getElementById("winsTextID");
var currentWordText = document.getElementById("currentWordTextID");
var guessRemainingText = document.getElementById("guessRemainingTextID");
var letterGuessedText = document.getElementById("letterGuessedTextID");

//Start game on click; This also selects computerGuess
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

//Users starts to guess
document.onkeydown = function(event) {
    var userGuess = event.key;
    console.log("userGuess: "+userGuess);
    console.log("Computer Guess:" + computerGuess);

    if (userGuess.length > 0){
        for (var i = 0; i < computerGuess.length; i++){
            if (computerGuess[i] === userGuess) {
                answerArray[i] = userGuess;
            }
        }
        guessRemaining--;
        document.getElementById("currentWordTextID").innerHTML = answerArray.join(" ");
    }
}
});
