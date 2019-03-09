

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessedletters = [];
var guessesleft = 0;
var wins = 0;
var losses = 0;

function playgame() {
    randomletter = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("Letter to guess: " + randomletter);
    guessedletters = [];
    guessesleft = 9;
}

playgame();

document.onkeyup = function (event) {
    var playerGuess = event.key;
    if (!guessedletters.includes(playerGuess) && !/[^a-zA-Z]/.test(event.key)) {
        if (playerGuess === randomletter) {
            wins++;

            playgame();
        }
        else if (guessesleft > 1) {
            guessedletters.push(playerGuess);
            guessesleft--;
        }
        else {
            losses++;
            playgame();
        }
        document.getElementById("countWins").innerHTML = "Wins: " + wins;
        document.getElementById("countLosses").innerHTML = "Losses: " + losses;
        document.getElementById("countGuesses").innerHTML = "Guesses left: " + guessesleft;
        document.getElementById("playerGuess").innerHTML = "Your Guesses so far: " + guessedletters.join(",");

    }
}