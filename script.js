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
    choice = (prompt(("Choose your weapon!")));
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    if (getComputerChoice() === 'rock' && getHumanChoice() === 'scissors') {
        return "You lose :( Rock beats scissors.";
    } else if (getComputerChoice() === 'rock' && getHumanChoice() === 'paper') {
        return "You win! Paper beats rock.";
    } else if (getComputerChoice() === 'paper' && getHumanChoice() === 'scissors') {
        return "You win! Scissors beat paper.";
    } else if (getComputerChoice() === 'paper' && getHumanChoice() === 'rock') {
        return "You lose :( Paper beats  rock.";
    } else if (getComputerChoice() === 'scissors' && getHumanChoice() === 'paper') {
        return "You lose :( Scissors beat paper.";
    } else if (getComputerChoice() === 'scissors' && getHumanChoice() === 'rock') {
        return "You win! Rock beats scissors.";
    }
}


//console.log(getComputerChoice());
//console.log(getHumanChoice());
console.log(playRound());