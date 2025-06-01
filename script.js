let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.playerButtons button');
const playerChoiceDisplay = document.querySelector('#player', '.icon');
const computerChoiceDisplay = document.querySelector('#computer', '.icon');
const scoreDisplay = document.querySelectorAll('.score p');
const winnerDisplay = document.querySelector('.winner h2');


function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const number = Math.floor(Math.random() * 3);
    return choices[number];}


function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        return "It's a draw!"
    }
    if (
        (humanChoice == 'rock' && computerChoice == 'scissors') ||
        (humanChoice == 'paper' && computerChoice == 'rock') ||
        (humanChoice == 'scissors' && computerChoice == 'paper')
    ){
        humanScore++;
        return `You win, ${humanChoice} beats ${computerChoice}`
    }
    else{
        computerScore++;
        return `You lost, ${computerChoice} beats ${humanChoice}`
    }
}

function checkWinner(){
    if (humanScore === 3){
        winnerDisplay.textContent = 'YOU WON!! GOOD JOB :D';
        disableButtons();
    }
    if (computerScore === 3){
        winnerDisplay.textContent = 'You lost :(';
        disableButtons();
    }
}

function disableButtons(){
    buttons.forEach(btn => btn.disabled = true);
}

function textToEmjoi(word){
    if(word == 'rock') return '🤜';
    if(word == 'paper') return '✋';
    if (word == 'scissors') return '✌️';
}

function updateUI(humanChoice,computerChoice,result){
    playerChoiceDisplay.textContent = textToEmjoi(humanChoice);
    computerChoiceDisplay.textContent = textToEmjoi(computerChoice);
    scoreDisplay[1].textContent = ` ${humanScore}`;
    scoreDisplay[3].textContent = ` ${computerScore}`;
    winnerDisplay.textContent = `${result}`;
}


buttons.forEach(button => {
    button.addEventListener('click',() => {
        const humanChoice = button.dataset.choice;
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        updateUI(humanChoice, computerChoice, result);
        checkWinner();

    });
});
