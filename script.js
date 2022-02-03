function computerPlay() {

	const rand = Math.floor(Math.random() * 3)

	let play

	switch(rand) {
	
		case 0:
			play = "rock"
			break

		case 1:
			play = "paper"
			break

		case 2:
			play = "scissors"
			break
	
	}

	return play

}

function playRound(playerSelection, computerSelection) {

	let result

	switch(playerSelection) {
	
		case "rock":

			switch(computerSelection) {
			
				case "rock":
					result = "d"
					break
				case "paper":
					result = "l"
					break
				case "scissors":
					result = "w"
					break
			
			}

			break

		case "paper":

			switch(computerSelection) {
			
				case "rock":
					result = "w"
					break
				case "paper":
					result = "d"
					break
				case "scissors":
					result = "l"
					break

			}

			break

		case "scissors":

			switch(computerSelection) {
			
				case "rock":
					result = "l"
					break
				case "paper":
					result = "w"
					break
				case "scissors":
					result = "d"
					break
			
			}

			break
	
	}

	return result;

}

const playerScoreText = document.querySelector(".player-score");
const computerScoreText = document.querySelector(".computer-score");
const buttons = document.querySelectorAll("button");
const playerMoveText = document.querySelector(".player-move");
const computerMoveText = document.querySelector(".computer-move");
const roundResultText = document.querySelector(".round-result");
const gameResultText = document.querySelector(".game-result");

let playerScore = 0;
let computerScore = 0;

buttons.forEach(function (button) {

	button.addEventListener("click", function (ev) {
	
		if(playerScore >= 5 || computerScore >= 5) return;

		const playerSelection = ev.target.innerText;
		const computerSelection = computerPlay();

		const result = playRound(playerSelection, computerSelection);
		let resultMessage;

		switch(result) {
		
			case "w":
				resultMessage = "you win...";
				playerScore++;
				break;
			case "l":
				resultMessage = "you lose, idiot";
				computerScore++;
				break;
			case "d":
				resultMessage = "draw. so boring.";
				break;
		
		}

		playerScoreText.textContent = "you: " + playerScore;
		computerScoreText.textContent = "computer: " + computerScore;
		playerMoveText.textContent = `you played ${playerSelection}`;
		computerMoveText.textContent = `computer played ${computerSelection}`;
		roundResultText.textContent = resultMessage;

		if(playerScore >= 5 || computerScore >= 5) {
		
			const winner = playerScore >= 5 ? "you" : "computer";
			gameResultText.textContent = winner + " won the game by reaching 5 points, congrats bro !";

			const resetButton = document.createElement("button");
			resetButton.textContent = "reset";
			resetButton.style.cssText = "display: block;";
			resetButton.addEventListener("click", function (ev2) {
			
				playerScore = 0;
				computerScore = 0;
				playerScoreText.textContent = "you: 0";
				computerScoreText.textContent = "computer: 0";
				gameResultText.textContent = "";
				ev2.target.remove();
			
			});
			gameResultText.append(resetButton);
		
		}

	});

});