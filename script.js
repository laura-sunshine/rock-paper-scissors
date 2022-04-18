const myValues = [
    "Rock",
    "Paper",
    "Scissors"
];

function computerPlay(values) {
    let randomValue = values[Math.floor(Math.random() * myValues.length)];
    return randomValue;
}

function playRound(playerSelection, computerSelection) {
        if (computerSelection == "Scissors" && playerSelection == "Paper") {
            return "You win! Rock beats scissors"; 
        } else {
            return "You lose"
        if (computerSelection == "Paper" && playerSelection == "Scissors") {
            return "You win! Scissors beat Paper";
        } else {
            return "You lose"    
        if (computerSelection == "Rock" && playerSelection == "Paper") {
            return "You win! Paper beats Rock";
        } else {
            return "You lose"
        }
    }

  
}

let computerSelection = computerPlay(myValues);
console.log(playRound(playerSelection, computerSelection))

// function game(playRound) {
//     for (let i=0; i<5; 1++) {

//     }
// }