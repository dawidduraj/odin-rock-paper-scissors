function computerPlay(){
    let random = Math.random();
    if (random < 0.3) return "ROCK";
    if (random < 0.6) return "PAPER";
    return "SCISSORS";
}