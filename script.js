function getComputerChoice() {
    let choice = (Math.random() * 100);

    if (choice >= 66) {
        return "scissors";
    } else if (choice >= 33) {
        return "paper";
    } else {
        return "rock";
    }
}

function getHumanChoice() {
    return (prompt("Choose your weapon!").toLowerCase());
}

let humanScore = 0;
let computerScore = 0;

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

function playRound() {
    if (computerSelection === 'rock' && humanSelection === 'scissors') {
        return "You lose :( Rock beats scissors.";
    } else if (computerSelection === 'rock' && humanSelection === 'paper') {
        return "You win! Paper beats rock.";
    } else if (computerSelection === 'rock' && humanSelection === 'rock') {
        return "Tie! Rock.";
    } else if (computerSelection === 'paper' && humanSelection === 'scissors') {
        return "You win! Scissors beat paper.";
    } else if (computerSelection === 'paper' && humanSelection === 'rock') {
        return "You lose :( Paper beats  rock.";
    } else if (computerSelection === 'paper' && humanSelection === 'paper') {
        return "Tie! Paper.";
    } else if (computerSelection === 'scissors' && humanSelection === 'paper') {
        return "You lose :( Scissors beat paper.";
    } else if (computerSelection === 'scissors' && humanSelection === 'rock') {
        return "You win! Rock beats scissors.";
    } else if (computerSelection === 'scissors' && humanSelection === 'scissors') {
        return "Tie! Scissors.";
    }
}

console.log(computerSelection);
console.log(humanSelection);
console.log(playRound());