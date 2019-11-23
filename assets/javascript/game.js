// array of letters to guess
var letters = ["a","b","c","d","e","f","g",
                    "h","i","j","k","l","m","n","o",
                    "p","q","r","s","t","u","v","w",
                    "x","y","z"];

//Initialize global game variables
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var guessesSoFar = [];
var userGuess = "";
//Function to generate random computer guess
function generateLetter(){
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
    return computerGuess;
};

//function to update guesses left on the DOM
function updateGuesses(){
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
};

// function to update the guessesSoFar array
function lettersGuessed(){
    guessesSoFar.push(userGuess);
    document.getElementById("lettersGuessed").innerHTML = "Letters Guessed: " + guessesSoFar.toString();
};

//function expression to generate the user's guess
document.addEventListener("keydown",function(event){
    userGuess = event.key.toLowerCase();
    return userGuess
});

//function that resets the game, to be used after a win or if guessesLeft = 0
function resetGame (){
    wins = 0;
    losses = 0;
    guessesLeft = 0;
    guessesSoFar = [];
};

//main game function
function gameRound(){
    updateGuesses()
    computerGuess = generateLetter();
    console.log("Computer Guess: " + computerGuess);
    console.log(userGuess);
    if (computerGuess === userGuess){
        wins++;

    }
    else{
        losses++;
        guessesLeft--;
        updateGuesses();
        lettersGuessed();
    };
};

console.log(userGuess);










