
console.log("Hello World")

//Create a function named getComputerChoice //

function getComputerChoice() {
    // Get a random number between 0 and 1
    let randomNumber = Math.random();

    // Divide the range (0 to 1) into three roughly equal parts
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Create a function for human ghoice //

function getHumanChoice () {

    let choice = prompt("Enter your choice: rock, paper, or scissors");
    return choice;
}


