const myValues = [
    "Rock",
    "Paper",
    "Scissors"
];

function computerPlay(values) {
    let randomValue = values[Math.floor(Math.random() * myValues.length)];
    return randomValue;
}

//function playround, takes 2 inputs - player and computer selections
function playRound(playerSelection, computerSelection) {
    //convert playerSelection to lowercase
    let playerSelectionLowercase = playerSelection.toLowerCase();
    //if comp picked scissors
        if (computerSelection == "Scissors") {
            //We check the 3 possible player selections
            //if player chose rock
            if (playerSelectionLowercase == "rock") {
                //log out this round result
                console.log("You win! Rock beats scissors");
                //return 1 - because player won
                return 1;
            }
            if (playerSelectionLowercase == "paper") {
                return "You lose, scissors beats paper"            
            }
            if (playerSelectionLowercase == "scissors") {
                return "You draw!"
            }

        }
        if (computerSelection == "Rock") {
            if (playerSelectionLowercase == "rock") {
                return "You draw";
            }
            if (playerSelectionLowercase == "paper") {
                return "You win! Paper beats rock"            
            }
            if (playerSelectionLowercase == "scissors") {
                return "You lose! Rock beats scissors"
            }

        }
        if (computerSelection == "Paper") {
            if (playerSelectionLowercase == "rock") {
                return "You lose! Paper beats rock";
            }
            if (playerSelectionLowercase == "paper") {
                return "You draw"            
            }
            if (playerSelectionLowercase == "scissors") {
                return "You win! Scissors beats paper"
            }

        }
        else {
            return "Something went wrong"
        }
  
}

let playerSelection = "rock";
let computerSelection = computerPlay(myValues);
//console.log(playRound(playerSelection, computerSelection))
game();

//function called game(), takes no inputs
function game()  {
    // initialise variables "wins" and "losses", set both to 0 at start
    let wins = 0;
    let losses = 0;

    //for loop that will go off 5 times
    for (let i = 0; i < 5; i++){
        // Get new random computer selection
        computerSelection = computerPlay(myValues);
        //get the result, should be either 1 (win), 0 (draw), -1 (loss). playRound will also log out this individual round result
        let result = playRound(playerSelection, computerSelection);
        //check what the result was and act on it
        //if we won
        if(result == 1){
            //increment the wins tracker
            wins = wins++;
            
        }
        //if we draw
        if(result == 0){
            //dont need to do anything
        }
        //if we lose
        if(result == -1){
            //increment the loss tracker
            losses = losses++;
            
        }
    }

    //print out the results, we now have "wins" and "losses" variabls with correct numbers
}

// function game(playRound) {
//     for (let i=0; i<5; 1++) {

//     }
// }