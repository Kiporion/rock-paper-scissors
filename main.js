

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
    console.log("Computer chose:", computerSelection);
    return computerSelection;
}

const playRound=(playerSelection, computerSelection)=>{
    let win =`You Win! ${playerSelection} beats ${computerSelection}`;
    let lose =`You Lose! ${computerSelection} beats ${playerSelection}`;
}


getComputerChoice();
console.log(computerSelection)
console.log(playerSelection);