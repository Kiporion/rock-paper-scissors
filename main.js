

let computerSelection;
let playerSelection=prompt("Choose Rock, Paper or Scissors: ");


const getComputerChoice =()=>
{
    let num = Math.floor(Math.random()*3)+1;
    switch(num){
        case 1:
            computerSelection="Rock";
            break;
        case 2:
            computerSelection="Paper";
            break;
        case 3:
            computerSelection="Scissors";
            break;
        default:
            computerSelection.log("Error Ocurred");
    }
    return computerSelection;
}

const playRound=(playerSelection, computerSelection)=>{
    let win =`You Win! ${playerSelection} beats ${computerSelection}`;
    let lose =`You Lose! ${computerSelection} beats ${playerSelection}`;
    let playerUP = playerSelection.toUpperCase();
    let computerUP = computerSelection.toUpperCase();

    if(playerUP=="ROCK" && computerUP== "SCISSORS"){
        return win;
    }else if(playerUP=="ROCK" && computerUP== "PAPER"){
        return lose;
    }else if(playerUP=="PAPER" && computerUP== "ROCK"){
        return win;
    }else if(playerUP=="PAPER" && computerUP== "SCISSORS"){
        return lose;
    }else if(playerUP=="SCISSORS" && computerUP== "PAPER"){

        return win;
    }else if(playerUP=="SCISSORS" && computerUP== "ROCK"){
        return lose;
    }else if(playerUP===computerUP){
        return `It's a Tie! You both chose ${playerUP}`
    }
}


getComputerChoice();
console.log(playRound(playerSelection,computerSelection));