const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const winner = document.querySelector("#winner");
const playerScoreUI = document.querySelector("#playerScore");
const computerScoreUI = document.querySelector("#computerScore");

let playerScore = 0, computerScore = 0;
let gameOver = false;

const buttons = document.querySelectorAll(".choice");
buttons.forEach(button => {
    button.addEventListener("click", () =>{
        let result = playRound(button.id, computerPlay());
        result = checkWinner(result);
        winner.textContent = result;
        winner.classList.remove("hidden");
    });
});

//Generate Computer Pick
function computerPlay(){
    let random = Math.random();
    if (random < 0.3) return "ROCK";
    if (random < 0.6) return "PAPER";
    return "SCISSORS";
}

function playRound(playerSelection, computerSelection){

    if (playerSelection !== null) playerSelection = playerSelection.toUpperCase();
    updateChoice(player,playerSelection);
    updateChoice(computer, computerSelection);


    if (playerSelection === computerSelection) return "The round is a Tie!"


    //Check all cases where the computer wins
    if(computerSelection === "ROCK" && playerSelection === "SCISSORS"
    ||  computerSelection === "PAPER" && playerSelection === "ROCK"
    ||  computerSelection === "SCISSORS" && playerSelection === "PAPER"){
        
        computerScore++;
        updateScore();
        return `You Lose the Round! ${computerSelection} beats ${playerSelection}`
    }
    //Check all cases where the player wins
    if (playerSelection === "ROCK" && computerSelection === "SCISSORS"
    ||  playerSelection === "PAPER" && computerSelection === "ROCK"
    ||  playerSelection === "SCISSORS" && computerSelection === "PAPER"){
        
        playerScore++;
        updateScore();
        return `You Win the Round! ${playerSelection} beats ${computerSelection}`
    }
        return "Invalid Input! No one wins!"
}

function updateChoice(player, choice){
    switch (choice)
    {
        case "ROCK":
            player.textContent = "????";
            break;
        case "PAPER":
            player.textContent = "????";
            break;
        case "SCISSORS":
            player.textContent = "??????";
            break;
        default:
            player.textContent = "???";
            break; 
    }
}

function updateScore(){
    playerScoreUI.textContent = `Player: ${playerScore}`;
    computerScoreUI.textContent = `Computer: ${computerScore}`;
}

function checkWinner(result){
    if(playerScore === 5){
        playerScore = 0;
        computerScore = 0;
        return "You Won the Game!"
    }
    else if(computerScore === 5){
        playerScore = 0;
        computerScore = 0;
        return "You lost the Game!"
    }
    else{
        return result;
    }
}


