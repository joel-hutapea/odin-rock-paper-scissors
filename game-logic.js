function getComputerChoice() {
    const choice = Math.random();
    console.log(choice);
    if (choice > (2/3)) {
        return "rock";
    } else if (choice > (1/3)) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("rock, paper or scissors?");
    choice = choice.toLowerCase();
    if ((choice === "rock") || (choice === "paper") || (choice === "scissors")) {
        return choice;
    } else {
        console.log("invalid choice")
    }
}