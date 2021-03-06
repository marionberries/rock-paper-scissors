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
// 4. Add rounds
// 5. keep score
// 6. declare winner

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

function rpsRound(rounds) {
    alert(`You have set ${rounds} rounds`)
    computerScore = 0;
    playerScore = 0;  

    for (let i = 0; i < rounds; i++){

        choice = playerChoice();
        computerChoice = computerPlay();

        if (choice == "END") {
            return null;
        }

        if (choice == "ROCK" && computerChoice == "ROCK") {
            alert(`Player:${choice} PC:${computerChoice}, TIE!`)
        }

        else if (choice == "ROCK" && computerChoice == "PAPER") {
            alert(`Player:${choice} PC:${computerChoice}, PC WINS!`)
            computerScore++;
        }

        else if (choice == "ROCK" && computerChoice == "SCISSORS") {
            alert(`Player:${choice} PC:${computerChoice}, PLAYER WINS!`)
            playerScore++;
        }

        else if (choice == "PAPER" && computerChoice == "ROCK") {
            alert(`Player:${choice} PC:${computerChoice}, PLAYER WINS!`)
            playerScore++;
        }

        else if (choice == "PAPER" && computerChoice == "PAPER") {
            alert(`Player:${choice} PC:${computerChoice}, TIE!`)
        }

        else if (choice == "PAPER" && computerChoice == "SCISSORS") {
            alert(`Player:${choice} PC:${computerChoice}, PC WINS!`)
            computerScore++;
        }

        else if (choice == "SCISSORS" && computerChoice == "ROCK") {
            alert(`Player:${choice} PC:${computerChoice}, PC WINS!`)
            computerScore++;
        }

        else if (choice == "SCISSORS" && computerChoice == "PAPER") {
            alert(`Player:${choice} PC:${computerChoice}, PLAYER WINS!`)
            playerScore++;
        }

        else if (choice == "SCISSORS" && computerChoice == "SCISSORS") {
            alert(`Player:${choice} PC:${computerChoice}, TIE!`)
        }

        else {
            // console.log(choice);
            // console.log(computerChoice);
            alert('Something went wrong...');
        }
    }

    alert(`Final score: \n Player: ${playerScore} \n Computer: ${computerScore}`)

    if (playerScore > computerScore) {
        alert("You won!")
    }

    else if (computerScore > playerScore) {
        alert("The computer won!")
    }

    else if (computerScore == playerScore) {
        alert("It's a draw!")
    }

    else {
        alert("Something went wrong with the tally...")
    }
}

function setRounds() {
    let rounds = prompt("How many rounds do you want to play? Please enter 0-100")
    
    if (rounds > 0 && rounds <= 100) {
        rpsRound(rounds);
    }

    else {
        alert('Enter a valid number')
        setRounds();
    }
    
}

setRounds();