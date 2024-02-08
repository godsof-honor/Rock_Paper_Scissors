let computerAnswer;

function getComputerChoice(){
    
    let intChoice = getRandomInt(3);
    
    let computerAnswer;
    if (intChoice === 0){
        computerAnswer = "Rock";
    } else if (intChoice === 1){
        computerAnswer = "Paper";
    } else {
        computerAnswer = "Scissors";
    }
    console.log(computerAnswer);
    return computerAnswer;
}

function getRandomInt(max){
    return Math.floor(Math.random() *max);
}

let playerSelection;
let computerSelection;


computerSelection = getComputerChoice();


// function playround(playerSelection, computerSelection){

// }

