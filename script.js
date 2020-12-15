'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct number!';
// document.querySelector('.number').textContent = '14';
// document.querySelector('.score').textContent = '23';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function() {
	const guess = Number(document.querySelector('.guess').value);
	//console.log(guess);

	//when there is no input
	if (!guess) {
		document.querySelector('.message').textContent = 'No Number Entered';
	} else if (guess === number) {
		//when the player wins
		document.querySelector('.message').textContent = 'Correct Guess!!!';
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';
		document.querySelector('.number').textContent = number;

		if (score > highscore) {
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
		}
	} else if (guess !== number) {
		//When guess is wrong either too high or too low
		if (score > 0) {
			document.querySelector('.message').textContent = guess > number ? 'Guess is too high!' : 'Guess is too low';
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.message').textContent = 'You lost!';
		}
	}

	// 	else if (guess > number) {
	// 		//when the guess is too high
	// 		if (score > 0) {
	// 			document.querySelector('.message').textContent = 'Guess is too high!';
	// 			score--;
	// 			document.querySelector('.score').textContent = score;
	// 		} else {
	// 			document.querySelector('.message').textContent = 'You lost!';
	// 		}
	// 	} else if (guess < number) {
	// 		//when the guess is too low

	// 		if (score > 0) {
	// 			document.querySelector('.message').textContent = 'Guess is too low!';
	// 			score--;
	// 			document.querySelector('.score').textContent = score;
	// 		} else {
	// 			document.querySelector('.message').textContent = 'You lost!';
	// 		}
	// 	}
	// 	console.log(score);
	// 	//resetting the secretnumber, resetting to blank data entry number, reset score
});

document.querySelector('.again').addEventListener('click', function() {
	//setting score back to 20 and clearing input field.
	score = 20;
	document.querySelector('.score').textContent = score;

	number = Math.trunc(Math.random() * 20) + 1;
	document.querySelector('.number').textContent = '?';
	//changing background color back to black and size of number
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';

	document.querySelector('.message').textContent = 'Start guessing ...';
	document.querySelector('.guess').value = '';

	// document.querySelector('.score').textContent = score;
	// document.querySelector('.number').textContent = number;

	// document.querySelector('.message').textContent = 'Start guessing...';
	// document.querySelector('.number').textContent;
	// document.querySelector('.score').textContent = score;
	// guess;
});
