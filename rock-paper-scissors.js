// Plan
// 1. Input and output is text based 
// 2. PC will generate result 
// 3. Player will input their choice

//Pseudocode
// 1. DONE create computerPlay function to have computer spit out a choice
//  a. DONE declare function (no parameters)
//  b. DONE assign number to variable (e.g. let rock = 0)
//  c. DONE use a random number generator to produce a number from 0-2 and store in computerChoice
//  d. DONE use if-else to return the a string associated with that number (e.g. if rand number is 1, return paper)
// 2. DONE Create playerChoice function
//  - DONE prompt player for choice
//  - DONE loop if player does not enter the right values
//  - DONE capitalize playerChoice
//  - DONE return playerChoice
// 3. DONE create rpsRound function
//  a. DONE accepts two parameters which are player choice computer choice
//  e. DONE use if-else to compare player choice and computer choice 

function computerPlay() {
    const rock = 0;
    const paper = 1;
    const scissors = 2;

    let computerChoice = Math.floor(Math.random() * 3); //generates a random number from 0-2 which represents rock, paper, and scissors

    if (computerChoice == 0) {
        return "ROCK";
    }

    else if (computerChoice == 1) {
        return "PAPER";
    }

    else if (computerChoice == 2) {
        return "SCISSORS";
    }

    else {
        alert("computerPlay messed up somehow, returning SCISSORS")
    }


}

function playerChoice() {
    let choice = prompt("Enter ROCK, PAPER, OR SCISSORS. Enter END to close");
    upperCaseChoice = choice.toUpperCase();

    if (upperCaseChoice == "END") {
        alert("Thanks for playing!");
        return "END";
    }

    else if (upperCaseChoice == "ROCK") {
        return "ROCK";
    }

    else if (upperCaseChoice == "PAPER") {
        return "PAPER";
    }

    else if (upperCaseChoice == "SCISSORS") {
        return "SCISSORS";
    }

    else {
        alert('Invalid choice');
        return playerChoice();
    }
}

function rpsRound() {
    choice = playerChoice();
    computerChoice = computerPlay();

    if (choice == "END") {
        return null;
    }    

    else if (choice == "ROCK" && computerChoice == "ROCK") {
        alert(`Player:${choice} PC:${computerChoice}, TIE!`)
        rpsRound();
    }

    else if (choice == "ROCK" && computerChoice == "PAPER") {
        alert(`Player:${choice} PC:${computerChoice}, PC WINS!`)
        rpsRound();
    }

    else if (choice == "ROCK" && computerChoice == "SCISSORS") {
        alert(`Player:${choice} PC:${computerChoice}, PLAYER WINS!`)
        rpsRound();
    }

    else if (choice == "PAPER" && computerChoice == "ROCK") {
        alert(`Player:${choice} PC:${computerChoice}, PLAYER WINS!`)
        rpsRound();
    }

    else if (choice == "PAPER" && computerChoice == "PAPER") {
        alert(`Player:${choice} PC:${computerChoice}, TIE!`)
        rpsRound();
    }

    else if (choice == "PAPER" && computerChoice == "SCISSORS") {
        alert(`Player:${choice} PC:${computerChoice}, PC WINS!`)
        rpsRound();
    }

    else if (choice == "SCISSORS" && computerChoice == "ROCK") {
        alert(`Player:${choice} PC:${computerChoice}, PC WINS!`)
        rpsRound();
    }

    else if (choice == "SCISSORS" && computerChoice == "PAPER") {
        alert(`Player:${choice} PC:${computerChoice}, PLAYER WINS!`)
        rpsRound();
    }

    else if (choice == "SCISSORS" && computerChoice == "SCISSORS") {
        alert(`Player:${choice} PC:${computerChoice}, TIE!`)
        rpsRound();
    }

    else {
        console.log(choice);
        console.log(computerChoice);
        alert('Something went wrong...');
    }
}

rpsRound();
