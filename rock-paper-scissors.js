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
// 2. Create playerChoice function
//  - DONE prompt player for choice
//  - DONE loop if player does not enter the right values
//  - capitalize playerChoice
//  - return playerChoice
// 3. create rpsRound function
//  a. accepts two parameters which are player choice computer choice
//  b. prompt player for their choice (e.g. rock, paper or scissors) or if they want to exit
//  - if exit, then close program, else move on to next step
//  c. convert player choice to uppercase 
//  c. do not let player input anything other than choice or exit condition
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
    if (upperCaseChoice == "ROCK") {
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

playerChoice();