console.log('hello there')

function getComputerChoice(){
    let number = (Math.random()) * 100;
    if (number < 34){
        return 'rock';}

    else if (number < 67){
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

console.log(getHumanChoice())