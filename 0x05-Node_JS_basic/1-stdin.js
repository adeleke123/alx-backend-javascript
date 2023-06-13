// Display the welcome message to STDOUT.
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for the user input.
process.stdin.on('data', (userInput) => {
  // Read user input from STDIN and display the user's name to STDOUT
  process.stdout.write(`Your name is: ${userInput}`);
});

// Display the closing message when the user ends the program.
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
