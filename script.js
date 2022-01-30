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

function playRound(userSelection, computerSelection) {

	let result

	switch(userSelection) {
	
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

	if(result == "w")
		return "you win"
	else if(result == "l")
		return "you lose, idiot"
	else
		return "draw"

}

function userPlay() {

	while(true) {
	
		let input = prompt("rock, paper, or scissors????")?.toLowerCase()

		switch(input) {
		
			case "rock":
			case "paper":
			case "scissors":
				return input
			default:
				console.log("enter an actual move lol")
				
		
		}
	
	}

}

function game() {

	for(let i = 0; i < 5; i++) {
	
		const userSelection = userPlay()
		console.log(`-- you played ${userSelection}`)

		const computerSelection = computerPlay()
		console.log(`-- computer played ${computerSelection}`)

		const result = playRound(userSelection, computerSelection)

		console.log(result)
	
	}

}

game()