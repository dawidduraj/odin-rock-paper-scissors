let playerScore = 0, computerScore = 0;

const buttons = document.querySelectorAll(".choice");
buttons.forEach(button => {
    button.addEventListener("click", () =>{
        let result = playRound(button.id, computerPlay());
        console.log(result);
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

    const player = document.querySelector("#player");
    const computer = document.querySelector("#computer");
    
    if (playerSelection !== null) playerSelection = playerSelection.toUpperCase();




    if (playerSelection === computerSelection) return "The round is a Tie!"


    //Check all cases where the computer wins
    if(computerSelection === "ROCK" && playerSelection === "SCISSORS"
    ||  computerSelection === "PAPER" && playerSelection === "ROCK"
    ||  computerSelection === "SCISSORS" && playerSelection === "PAPER"){
        computerScore++;
        return `You Lose the Round! ${computerSelection} beats ${playerSelection}`
    }
    //Check all cases where the player wins
    if (playerSelection === "ROCK" && computerSelection === "SCISSORS"
    ||  playerSelection === "PAPER" && computerSelection === "ROCK"
    ||  playerSelection === "SCISSORS" && computerSelection === "PAPER"){
        
        playerScore++;
        return `You Win the Round! ${playerSelection} beats ${computerSelection}`
    }
        return "Invalid Input! No one wins!"
}

function game(){
    //Play five rounds
    //for (let i = 0; i < 5; i++){

        //console.log(playRound(prompt("ROCK, PAPER OR SCISSORS: "), computerPlay()))
    //}
    //if (playerScore === computerScore) {console.log(`Tie! ${playerScore} to ${computerScore}`)}
    //else{
        //(playerScore>computerScore) ? console.log(`Player wins ${playerScore} to ${computerScore}`) : console.log(`Computer wins ${computerScore} to ${playerScore}`)   
    //}

    //playerScore = 0;
    //computerScore = 0;
}

//game();

