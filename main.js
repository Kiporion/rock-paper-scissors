console.log("Hello World!");

const getComputerChoice =()=>
{
    let num = Math.floor(Math.random()*3)+1;
    let choice;
    switch(num){
        case 1:
            choice="Rock";
            break;
        case 2:
            choice="Paper";
            break;
        case 3:
            choice="Scissors";
            break;
        default:
            console.log("Error Occured");
    }
    console.log("Computer chose:", choice);
}

getComputerChoice();