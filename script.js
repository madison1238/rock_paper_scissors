let humanScore = 0;
let computerScore = 0;
let playAgain = 'Y'

function getComputerChoice(){
    let number = Math.floor(Math.random() * 3)
    if (number == 0){
        return 'rock';}

    else if (number == 1){
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function getHumanChoice(){
    let choice = (prompt("Choose rock, paper, or scissors")).toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        console.log("it's a draw")
    }
    else if (computerChoice == 'rock'){
        if(humanChoice == 'scissors'){
            computerScore++;
            console.log('You lost, rock beats scissors')
        }
        if(humanChoice == 'paper'){
            humanScore++;
            console.log('You won, paper beats rock')
        }
    } 
    else if(computerChoice == 'paper'){
        if(humanChoice == 'rock'){
            computerScore ++;
            console.log("You lost, paper beats rock")
        }
        else if(humanChoice == 'scissors'){ 
            humanScore++;
            console.log('You won, scissors beats paper')
        }
    }
    else if (computerChoice == 'scissors'){
        if (humanChoice == 'rock'){
            humanScore++
            console.log('You won, rock beats scissors')
        }
        else if (humanChoice == 'paper'){
            computerScore++;
            console.log('You lost, scissors beats paper');
        }
    }
}


function playGame(){
    
    while(humanScore != 3 && computerScore != 3){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`You:${humanScore} \nComputer:${computerScore}`);
    }
    if (humanScore == 3)[
        console.log("YOU WON!! GOOD JOB :D")
    ]
    else{
        console.log('You lost :(')
    }

}

while(playAgain == 'Y'){
playGame();
humanScore = 0;
computerScore = 0;
playAgain = (prompt('Play again? Y or N: ')).toUpperCase();
}