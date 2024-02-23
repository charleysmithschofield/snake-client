// input.js
// This will hold the connection object
let connection;

// require move and say objects from constants.js file
const { move, say } = require('./constants');

// define handleUserInput function
const handleUserInput = function(data) {
  // If the input is CTRL + C
  if (data === '\u0003') {
    // If so, exit the process
    process.exit();
    // If the input is one of the movement keys
  } if (move[data]) {
    // Send the corresponding movement command to the server
    connection.write(move[data]);
    // If the input is one of the say keys
  } if (say[data]) {
    // Send the corresponding messages to the server
    connection.write(say[data]);
  }
};

// sets up the user input handler
const setupInput = function(conn) {
  // Store the connection object passed to setupInput
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // Set up event listender for user input on stdin
  stdin.on("data", handleUserInput);
  // Return the stdin stream for further use
  return stdin;
};
// exports the setupInput file
module.exports = { setupInput };