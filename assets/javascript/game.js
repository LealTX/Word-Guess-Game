var batWords = ["bruce", "wayne", "pennyworth", "scarecrow", "bane"];

var lettersGuessed = [];
var lettersCorrect = [];
var guessRemaining = 8;
var wins = 0;
var losses = 0;

//Add the text stuff here
var directionsText = document.getElementById("directionTextID");


document.getElementById("directionTextID").addEventListener("click", function() {
    var computerGuess = batWords[Math.floor(Math.random() * batWords.length)];
    console.log("Computer Selects: "+computerGuess)
    
    directionsText.textContent = "";


}, true);

//Function
document.onkeydown = function(event) {
    var userGuess = event.key;

    //Hide Direction
    console.log("Computer Selects: "+computerGuess)
    console.log("userGuess: "+userGuess);
    console.log(batWords.indexOf(computerGuess));
    batWords.splice(batWords.indexOf(computerGuess),1);
    console.log(batWords);


}

