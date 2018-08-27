var batWords = ["bruce", "wayne", "pennyworth", "scarecrow", "bane"];
//Define vars
var lettersGuessed = [];
var lettersCorrect = [];
var guessRemaining = 5;
var wins = 0;
var losses = 0;
var answerArray = [];
var computerGuess;
var letterIncorrect = true;

//Add the text stuff here
var directionsText = document.getElementById("directionTextID");
var winsText = document.getElementById("winsTextID");
var lossesText = document.getElementById("lossesTextID");
var hiddenWord = document.getElementById("hiddenWordID");
var currentWordText = document.getElementById("currentWordTextID");
var guessRemainingText = document.getElementById("guessRemainingTextID");
var letterGuessedText = document.getElementById("letterGuessedTextID");

//Start game on click; This also selects computerGuess
document.getElementById("directionTextID").addEventListener("click", function () {
    computerGuess = batWords[Math.floor(Math.random() * batWords.length)];
    guessRemaining = 5;

    for (var i = 0; i < computerGuess.length; i++) {
        answerArray[i] = " _ ";
    }

    directionsText.textContent = "";

    hiddenWord.textContent = "Word";
    currentWordText.textContent = answerArray;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessRemainingText.textContent = "Lives Left: " + guessRemaining;
    letterGuessedText.textContent = "Letters Guessed: " + lettersGuessed;

});
//Users starts to guess
document.onkeydown = function (event) {
    var userGuess = event.key;
    console.log("userGuess: " + userGuess);
    console.log("Computer Guess:" + computerGuess);
    lettersGuessed.push(userGuess);
    letterGuessedText.textContent = "Letters Guessed: " + lettersGuessed;

//Computer Checks if the letter is in the word,
//if correct set letterIncorrect to false
    for (var i = 0; i < computerGuess.length; i++) {
        if (computerGuess[i] === userGuess) {
            answerArray[i] = userGuess;
            document.getElementById("currentWordTextID").innerHTML = answerArray.join(" ");
            letterIncorrect = false;
        }
        console.log(letterIncorrect);

    }
//If incorrect then it removes life
    if (letterIncorrect) {
        guessRemaining--;
        guessRemainingText.textContent = "Lives Left: " + guessRemaining;
    }

//Reset letterIncorrect
    letterIncorrect = true;

//Checks lives, if 0 You Lose! and reset game
    if (guessRemaining == 0) {
        alert("You lose!!");
        losses++;
        lossesText.textContent = "Losses: " + losses;
        console.log("You lose!!");
        playAgain();
    }

//If no more _ then You Win! and Reset game
    if (!answerArray.includes(" _ ")) {
        wins++;
        winsText.textContent = "Wins: " + wins;
        console.log("You Win!!");
        playAgain();
        
    }

}

//Function to Reset the game
function playAgain () {
    computerGuess = batWords[Math.floor(Math.random() * batWords.length)];
    guessRemaining = 5;
    answerArray = [];
    for (var i = 0; i < computerGuess.length; i++) {
        answerArray[i] = " _ ";
    }
    lettersGuessed = [];
    currentWordText.textContent = answerArray;
    guessRemainingText.textContent = "Lives Left: " + guessRemaining;
    letterGuessedText.textContent = "Letters Guessed: " + lettersGuessed;
}


