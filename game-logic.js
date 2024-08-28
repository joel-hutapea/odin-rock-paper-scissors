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