////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt("Please choose either 'rock', 'paper', or 'scissors'");
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
var move;
var playerMove;
var computerMove;

function getPlayerMove(move) {
    var playerMove = move || getInput();
    console.log("Player chose " + playerMove);
    return playerMove;
}

function getComputerMove(move) {
    var computerMove = move || randomPlay();
    console.log("Computer chose " + computerMove);
    return computerMove;
}

function getWinner(playerMove,computerMove) {
    var winner;
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
   if ((playerMove === 'rock' && computerMove === 'paper')
         || (playerMove === 'paper' && computerMove === 'scissors')
         || (playerMove === 'scissors' && computerMove === 'rock')) {
         winner = 'computer';
     }
     else if ((playerMove === 'rock' && computerMove === 'scissors')
             || (playerMove === 'paper' && computerMove === 'rock')
             || (playerMove === 'scissors' && computerMove === 'paper')) {
     winner = 'player';
     }
     else if (playerMove === computerMove) {
         winner = 'tie';
     }

    console.log("The winner is " + winner);
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while ((playerWins <= 4) && (computerWins <= 4)) {
    var computerMove = getComputerMove();
    var playerMove = getPlayerMove();
    var winner = getWinner(getPlayerMove, getComputerMove);
    console.log('The player has chosen ' + playerMove + '. The computer has chosen ' + computerMove);
    if (winner === "player") {
        playerWins += 1;
    }
    else if (winner === "computer") {
        computerWins += 1;
    }
    if ((playerWins == 5) && (computerWins == 5)) {
        console.log("The final score was.: " + playerWins + " to " + computerWins);
    }
    else {
        console.log("The " + winner + ' takes the round. It is now ' + playerWins + ' to ' + computerWins);
    }
  }
}
playToFive ()
