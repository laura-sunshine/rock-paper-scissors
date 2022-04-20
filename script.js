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
                console.log("You lose, scissors beats paper");
                return -1;             
            }
            if (playerSelectionLowercase == "scissors") {
                console.log("You draw");
                return 0;
            }

        }
        else if (computerSelection == "Rock") {
            if (playerSelectionLowercase == "rock") {
                console.log("You draw");
                return 0;
            }
            if (playerSelectionLowercase == "paper") {
                console.log("You win! Paper beats rock");
                return 1;          
            }
            if (playerSelectionLowercase == "scissors") {
                console.log("You lose, rock beats scissors");
                return -1;  
            }

        }
        else if (computerSelection == "Paper") {
            if (playerSelectionLowercase == "rock") {
                console.log("You lose, paper beats rock");
                return -1; 
            }
            if (playerSelectionLowercase == "paper") {
                console.log("You draw");
                return 0;           
            }
            if (playerSelectionLowercase == "scissors") {
                console.log("You win! Scissors beat paper");
                return 1;  
            }

        }
        else {
            return "Something went wrong"
        }
  
}

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
        playerSelection = window.prompt("Type rock, paper or scissors into the box");
        //get the result, should be either 1 (win), 0 (draw), -1 (loss). playRound will also log out this individual round result
        let result = playRound(playerSelection, computerSelection);
        //check what the result was and act on it
        //if we won
        if(result == 1){
            //increment the wins tracker
            wins++;
            
        }
        //if we draw
        if(result == 0){
            //dont need to do anything
        }
        //if we lose
        if(result == -1){
            //increment the loss tracker
            losses++;
            
        }
        
    }
    //print out the results, we now have "wins" and "losses" variables with correct numbers
    if (wins > losses){
        console.log("You win overall")
    }
    else if (losses > wins){
        console.log("You lose overall")
    }
    else {
        console.log("No winner")
    }
    console.log("Wins " + wins , "Losses " + losses)

    

}