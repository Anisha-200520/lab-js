const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function askGuess() {
  rl.question("Guess a number between 1 and 100: ", (input) => {
    const guess = parseInt(input);
    attempts++;

    if (isNaN(guess)) {
      console.log("Please enter a valid number.");
    } else if (guess < secretNumber) {
      console.log("Higher!");
    } else if (guess > secretNumber) {
      console.log("Lower!");
    } else {
      console.log(`Correct! You guessed it in ${attempts} attempts.`);
      rl.close();
      return;
    }

    askGuess(); // Ask again
  });
}

// Start the game
askGuess();