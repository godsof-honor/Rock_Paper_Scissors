let computerAnswer;

function getComputerChoice(){
    
    let intChoice = getRandomInt(3);
    
    let computerAnswer;
    if (intChoice === 0){
        computerAnswer = "ROCK";
    } else if (intChoice === 1){
        computerAnswer = "PAPER";
    } else {
        computerAnswer = "SCISSORS";
    }
    return computerAnswer;
}


function getRandomInt(max){
    return Math.floor(Math.random() *max);
}


let computerSelection;
let playerSelection;


function player(){
    playerChoice = prompt("Please enter your choice");
    playerAnswer = playerChoice.toUpperCase();
    return playerAnswer;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        alert("You win! ROCK beats SCISSORS!");
        return 1;
    }
    else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        alert("You lose! PAPER beats ROCK!");
        return 0;
    }
    else if (playerSelection == "ROCK" && computerSelection == "ROCK") {
        alert("You both picked ROCK! This is a tie!");
        return -1;
    }
    else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        alert("You win! PAPER beats ROCK!");
        return 1;
    }
    else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        alert("You lose! SCISSORS beats ROCK");
        return 0;
    }
    else if (playerSelection == "PAPER" && computerSelection == "PAPER") {
        alert("You both picked PAPER! This is a tie!");
        return -1;
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        alert("You lose! ROCK beats SCISSORS");
        return 0;
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        alert("You win! SCISSORS beats PAPER");
        return 1;
    }
    else {
        alert("You tie! You both picked SCISSORS");
        return -1;
    }
}


function playGame(){
    let playerWins = 0;
    let computerWins = 0;
    let r = 5;

    for (let i = 0; i < r; i++) {
        playerSelection = player();
        computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result == 1) {
            playerWins = playerWins + 1;
        }
        else if (result == 0) {
            computerWins = computerWins + 1;
        }
        else {
            r++;
        }
        if (playerWins == 3 || computerWins == 3) {
            break;
        }
    }
    console.log(playerWins + "-" + computerWins);
}

playGame();