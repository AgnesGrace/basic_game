let gameBox = ['rock', 'paper', 'scissors'];

const computerPlay = () => {
    let gameBox_index = Math.floor(Math.random() * gameBox.length) + 1;
    return gameBox[gameBox_index];

}

function singleGameRound(playerSelection, computerSelection) {
    return (
        playerSelection === computerSelection ? "haaaaaa!!! it is a tie" :
            playerSelection === "rock" && computerSelection === "scissors" ?
                "Yes!!!! You win! Rock beats Scissors" :
                playerSelection === "paper" && computerSelection === "rock" ?
                    "Yes!!!! You win! Paper beats Rock" :
                    playerSelection === "scissors" && computerSelection === "paper" ?
                        "Yes!!!!!!You win! Scissors beats Paper" :
                        "Oh sorry, you lose!"
    );
    /*
    if (playerSelection === computerSelection) {
        return "haaaaaa!!! it is a tie"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "Yes!!!! You win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "Yes!!!! You win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "Yes!!!!!!You win! Scissors beats Paper";
    } else {
        return "You lose!"
    } */
}


function gameRound() {
    let playerScore = 0;
    let computerScore = 0;
    for (let count = 0; count < 5; count++) {
        let playerSelection = prompt("🎮 pick a tool 👁 out of Rock, Paper and Scissors").toLowerCase();
        const computerSelection = computerPlay()
        if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors') {
            if (singleGameRound(playerSelection, computerSelection) == 'haaa! it is a tie') {
                console.log(`Player Score: ${playerScore}`)
                console.log(`Computer Score: ${computerScore}`)
            } else if (singleGameRound(playerSelection, computerSelection) == `You win! ${playerSelection} beats ${computerSelection}!`) {
                playerScore++
                console.log(`Player Score: ${playerScore}`)
            } else {
                computerScore++
            }
            console.log(singleGameRound(playerSelection, computerSelection))
        } else {
            console.log("game over!!!")
            count--
        }
    }
}

gameRound();












