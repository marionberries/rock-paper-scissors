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
// 3. create rpsRound function
//  a. DONE accepts two parameters which are player choice computer choice
//  e. use if-else to compare player choice and computer choice 
//  f. go through win conditions first, then draw, else lose

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
        alert("Thanks for playing!")
        return "END";
    }
    if else (upperCaseChoice == "ROCK") {
        return "ROCK";
    }

    else if (upperCaseChoice == "PAPER") {
        return "PAPER";
    }

    else if (upperCaseChoice == "SCISSORS") {
        return "SCISSORS";
    }

    else {
        alert('Invalid choice')
        playerChoice();
    }


}

function rpsRound(playerChoice, computerChoice) {
    playerChoice = playerChoice();
    computerChoice = computerChoice();

    
    
}