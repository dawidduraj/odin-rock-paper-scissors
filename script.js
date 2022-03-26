let playerScore = 0, computerScore = 0;

//Generate Computer Pick
function computerPlay(){
    let random = Math.random();
    if (random < 0.3) return "ROCK";
    if (random < 0.6) return "PAPER";
    return "SCISSORS";
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    console.log(computerSelection)
    if (playerSelection === computerSelection) return "Tie!"

    //Check all cases where the computer wins
    if(computerSelection === "ROCK" && playerSelection === "SCISSORS"
    ||  computerSelection === "PAPER" && playerSelection === "ROCK"
    ||  computerSelection === "SCISSORS" && playerSelection === "PAPER"){
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
    //Check all cases where the player wins
    if (playerSelection === "ROCK" && computerSelection === "SCISSORS"
    ||  playerSelection === "PAPER" && computerSelection === "ROCK"
    ||  playerSelection === "SCISSORS" && computerSelection === "PAPER"){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
        return "Invalid Input!"
}

function game(){
    for (let i = 0; i < 5; i++){
        
        playRound();
    }
}
