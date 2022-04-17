// Plan
// 1. Input and output is text based 
// 2. PC will generate result 
// 3. Player will input their choice

//Pseudocode
// 1. create computerPlay function to have computer spit out a choice
//  a. declare function (no parameters)
//  b. assign number to variable (e.g. let rock = 0)
//  c. use a random number generator to produce a number from 0-2
//  d. use if-else to return the a string associated with that number (e.g. if rand number is 1, return paper)
// 2. create rpsRound function
//  a. accepts two parameters which are player choice computer choice
//  b. convert computerChoice to uppercase
//  b. prompt player for their choice (e.g. rock, paper or scissors) or if they want to exit
//  - if exit, then close program, else move on to next step
//  c. convert player choice to uppercase 
//  c. do not let player input anything other than choice or exit condition
//  e. use if-else to compare player choice and computer choice 
//  f. go through win conditions first, then draw, else lose