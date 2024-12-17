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

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')) {
        humanScore ++;
        return "You win! " + humanChoice  + " beats " + computerChoice + ".";
    } else if (humanChoice === 'rock' && computerChoice === 'paper' || (humanChoice === 'paper' && computerChoice === 'scissors') || 
    (humanChoice === 'scissors' && computerChoice === 'rock')) {
        computerScore ++;
        return "You lose :( " + computerChoice  + " beats " + humanChoice + ".";
    } else if (humanChoice === 'rock' && computerChoice === 'rock' || (humanChoice === 'paper' && computerChoice === 'paper') ||
    (humanChoice === 'scissors' && computerChoice === 'scissors')) {
        return "Tie! " + humanChoice + ".";
    }
}

console.log(computerSelection);
console.log(humanSelection);
console.log(playRound(humanSelection, computerSelection));
console.log("Your score: " + humanScore + " vs. Computer Score: " + computerScore);