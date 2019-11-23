// array of letters to guess
var letters = ["a","b","c","d","e","f","g",
                    "h","i","j","k","l","m","n","o",
                    "p","q","r","s","t","u","v","w",
                    "x","y","z"];

//Initialize game variables
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];

//Function to generate random computer guess
function generateLetter(){
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log("Computer Guess: " + computerGuess)
    return computerGuess;
};

//function to update guesses left on the DOM
function updateGuesses(){
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    console.log(guessesLeft)
};

// function to update the guessesSoFar array
function lettersGuessed(){
    guessesSoFar.push(userGuess);
    document.getElementById("lettersGuessed").innerHTML = "Letters Guessed: " + guessesSoFar.toString();
    console.log(guessesSoFar)
};

//function expression to generate the user's guess
var userGuess = document.addEventListener("keydown",function(){
    event.key
    console.log(event.key)
});








