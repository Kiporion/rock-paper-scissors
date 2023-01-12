

let computerSelection;
let playerSelection;
let winScore=0;
let loseScore=0;





const game=()=>
{

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
        let win =`You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`;
        let lose =`You Lose! ${computerSelection} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
        let playerUP = playerSelection.toUpperCase();
        let computerUP = computerSelection.toUpperCase();
    
        if(playerUP=="ROCK" && computerUP== "SCISSORS" || playerUP=="PAPER" && computerUP== "ROCK" || playerUP=="SCISSORS" && computerUP== "PAPER"){
            winScore++;
            return win;
        }else if(playerUP=="ROCK" && computerUP== "PAPER" || playerUP=="PAPER" && computerUP== "SCISSORS" || playerUP=="SCISSORS" && computerUP== "ROCK"){
            loseScore++;
            return lose;
        }else if(playerUP===computerUP){
            return `It's a Tie! You both chose ${computerSelection}`
        }

    }
    for(let i=0; i<5; i++){
        getComputerChoice();
        playerSelection=prompt("Choose Rock, Paper or Scissors: ");
        console.log(playRound(playerSelection,computerSelection));
    }
    if (winScore>loseScore){
        console.log(`You are the final WINNER! Congratulation!\nFinal Score: ${winScore} : ${loseScore}`)
    } else if (loseScore>winScore){
        console.log(`You have lost... Better luck next time!\nFinal Score: ${winScore} : ${loseScore}`)
    }
}


game(playerSelection,computerSelection);
// console.log(playRound(playerSelection,computerSelection));