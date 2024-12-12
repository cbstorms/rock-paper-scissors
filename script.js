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

function playRound(humanChoice, computerChoice) {
    if (computerChoice === 'rock' && humanChoice === 'scissors') {
        computerScore ++;
        return "You lose :( Rock beats scissors.";
    } else if (computerChoice === 'rock' && humanChoice === 'paper') {
        humanScore ++;
        return "You win! Paper beats rock.";
    } else if (computerChoice === 'rock' && humanChoice === 'rock') {
        return "Tie! Rock.";
    } else if (computerChoice === 'paper' && humanChoice === 'scissors') {
        humanScore ++;
        return "You win! Scissors beat paper.";
    } else if (computerChoice === 'paper' && humanChoice === 'rock') {
        computerScore ++;
        return "You lose :( Paper beats rock.";
    } else if (computerChoice === 'paper' && humanChoice === 'paper') {
        return "Tie! Paper.";
    } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
        computerScore ++;
        return "You lose :( Scissors beat paper.";
    } else if (computerChoice === 'scissors' && humanChoice === 'rock') {
        humanScore ++;
        return "You win! Rock beats scissors.";
    } else if (computerChoice === 'scissors' && humanChoice === 'scissors') {
        return "Tie! Scissors.";
    }
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

console.log(computerSelection);
console.log(humanSelection);
console.log(playRound(humanSelection, computerSelection));
console.log("Computer: " + computerScore + " vs " + "Your score: " + humanScore);