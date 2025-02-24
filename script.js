let score = {
    wins: 0,
    losses: 0,
    ties: 0
}

// Retrieve score from localStorage
let storedScore = JSON.parse(localStorage.getItem("score")); // retrieving score from local storage
console.log(storedScore);

// If there is data stored in localStorage, assign it to score
if (storedScore) {
    score = storedScore;
    document.getElementById("wins").innerHTML = `Wins: ${score.wins}`;
    document.getElementById("Losses").innerHTML = `Losses: ${score.losses}`;
    document.getElementById("Draws").innerHTML = `Ties: ${score.ties}`;
}

document.getElementById("rock").addEventListener("click", myFunction);
document.getElementById("paper").addEventListener("click", myFunction);
document.getElementById("scissors").addEventListener("click", myFunction);
document.getElementById("Reset").addEventListener("click", resetGame);

function resetGame() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    document.getElementById("wins").innerHTML = `Wins: ${score.wins}`;
    document.getElementById("Losses").innerHTML = `Losses: ${score.losses}`;
    document.getElementById("Draws").innerHTML = `Ties: ${score.ties}`;
    localStorage.removeItem("score");
}

function computerchoice() {
    const choice = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3); // generates a random index (0-2)
    const computer = choice[randomIndex];
    console.log("Computer's choice:", computer); // Debugging log
    return computer;
}

function myFunction(event) {
    console.log("Player's choice:", event.target.id); // Debugging log
    const playerchoice = event.target.closest('button').id; // Get player's choice
    console.log("Player's choice:", playerchoice);
    const computer = computerchoice(); 

    console.log("Player choice:", playerchoice);
    console.log("Computer choice:", computer);

    let resultText = '';

    if (playerchoice === computer) {
        resultText = "It's a draw!";
        console.log("It's a draw!");
        score.ties++;
    } else if (
        (playerchoice === "rock" && computer === "scissors") ||
        (playerchoice === "paper" && computer === "rock") ||
        (playerchoice === "scissors" && computer === "paper")
    ) { 
        resultText = "Yayy!! You win";
        console.log("You win!");
        score.wins++;
    } else {
        resultText = "Sorry, you lose";
        console.log("You lose!");
        score.losses++;
    }

    document.getElementById("result").innerHTML = resultText;
    document.getElementById("wins").innerHTML = `Wins: ${score.wins}`;
    document.getElementById("Losses").innerHTML = `Losses: ${score.losses}`;
    document.getElementById("Draws").innerHTML = `Ties: ${score.ties}`;

    // Update localStorage
    localStorage.setItem("score", JSON.stringify(score));
}
