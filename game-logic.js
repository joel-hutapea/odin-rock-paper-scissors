playGame();

function getComputerChoice() {
    const choice = Math.random();
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

function playRound(humanChoice, computerChoice) {
    if (humanChoice == null) {
        return;
    }

    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    console.log("You draw!");
                    return;

                case "paper":
                    console.log("You lose! Paper beats Rock");
                    return "lose";

                case "scissors":
                    console.log("You win! Rock beats Scissors");
                    return "win";
            }
        
        case "paper":
            switch (computerChoice) {
                case "rock":
                    console.log("You win! Paper beats Rock");
                    return "win";

                case "paper":
                    console.log("You draw!");
                    return;

                case "scissors":
                    console.log("You lose! Scissors beats Paper");
                    return "lose";
            }

        case "scissors":
            switch (computerChoice) {
                case "rock":
                    console.log("You lose! Rock beats Scissors");
                    return "lose";

                case "paper":
                    console.log("You win! Scissors beats Paper");
                    return "win";

                case "scissors":
                    console.log("You draw!");
                    return;
            }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        const result = playRound(humanSelection, computerSelection);
        switch (result) {
            case "win":
                humanScore += 1;
                break;

            case "lose":
                computerScore += 1;
                break;
        }
    }

    console.log("Your Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}