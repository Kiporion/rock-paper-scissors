

let computerSelection;
let playerSelection;
let winScore=0;
let loseScore=0;
let counter=0;

const buttons=document.querySelectorAll("button");
const newGame=document.getElementById("new-game");
const result=document.getElementById("result");
const container=document.getElementById("container");





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


    // Main game function
    const playRound=(playerSelection, computerSelection)=>{
        let win =`You Win! ${playerSelection} beats ${computerSelection}! `;
        let lose =`You Lose! ${computerSelection} beats ${playerSelection}! `;
        let tie=`It's a Tie! You both chose ${computerSelection}! `;
    
        if(playerSelection=="Rock" && computerSelection== "Scissors" || playerSelection=="Paper" && computerSelection== "Rock" || playerSelection=="Scissors" && computerSelection== "Paper"){
            winScore++;
            counter++;
            counter!=5? result.textContent=win+`Current score is ${winScore} : ${loseScore}` : result.textContent=win+`FINAL score is ${winScore} : ${loseScore}`  ;
            container.appendChild(result);
        }else if(playerSelection=="Rock" && computerSelection== "Paper" || playerSelection=="Paper" && computerSelection== "Scissors" || playerSelection=="Scissors" && computerSelection== "Rock"){
            loseScore++;
            counter++;
            counter!=5? result.textContent=lose+`Current score is ${winScore} : ${loseScore}`: result.textContent=lose+`FINAL score is ${winScore} : ${loseScore}`  ;
            container.appendChild(result);
        }else if(playerSelection===computerSelection){
            counter!=5? result.textContent=tie+`Current score is ${winScore} : ${loseScore}`: result.textContent=tie+`FINAL score is ${winScore} : ${loseScore}`  ;
            container.appendChild(result);
        }
        // Game Over after 5 rounds
        if (counter>=5){
            buttons.forEach((button)=>{
                button.disabled=true;
            })
            newGame.style.display="flex";
            newGame.disabled=false;
        }
    }


    // On click function for buttons
    function selectThis(e){
        getComputerChoice();
        playerSelection=e.target.id;
        playRound(playerSelection,computerSelection);
        console.log(counter);
    }
    buttons.forEach((button)=>{
        button.addEventListener("click",selectThis)
    })

    // New Game Function
    function Restart(){
        counter=0;
        winScore=0;
        loseScore=0;
        container.removeChild(result);
        buttons.forEach((button)=>{
            button.disabled=false;
        })
        newGame.style.display="none";
        newGame.disabled=true;
    }
    newGame.addEventListener("click",Restart);

}


game(playerSelection,computerSelection);