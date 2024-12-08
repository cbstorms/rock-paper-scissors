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
    let choice = (prompt(("Choose your weapon!")));
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (computerChoice === 'rock' && humanChoice === 'scissors') {
        return "Rock beats scissors!";
    }
}


console.log(getComputerChoice());
console.log(getHumanChoice());
console.log(playRound(getComputerChoice(), getHumanChoice()));