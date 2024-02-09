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



playerSelection = player();
computerSelection = getComputerChoice();

console.log("Player chooses:", playerSelection);
console.log("Computer chooses", computerSelection);



function playround(playerSelection, computerSelection){
    if (playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        alert("You win! ROCK beats SCISSORS!")
    }
    else if (playerSelection == "ROCK" && computerSelection == "PAPER"){
        alert("You lose! PAPER beats ROCK!")
    }
    else if (playerSelection == "ROCK" && computerSelection == "ROCK"){
        alert("You both picked ROCK! This is a tie!")
    }
    else if (playerSelection == "PAPER" && computerSelection == "ROCK"){
        alert("You win! PAPER beats ROCK!")
    }
    else if (playerSelection == "PAPER" && computerSelection == "SCISSORS"){
        alert("You lose! SCISSORS beats ROCK")
    }
    else if (playerSelection == "PAPER" && computerSelection == "PAPER"){
        alert("You both picked PAPER! This is a tie!")
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        alert("You lose! ROCK beats SCISSORS")
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        alert("You win! SCISSORS beats PAPER")
    }
    else (playerSelection == "SCISSORS" && computerSelection == "SCISSORS"){
        alert("You both picked SCISSORS! This is a tie!")
    }
}

playround(playerSelection, computerSelection);