// input.js
// This will hold the connection object
let connection;

// sets up the user input
const setupInput = function(conn) {
  connection = conn; // Store the connection object passed to setupInput
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

// define handleUserInput function
const handleUserInput = function(data) {
  // Check for CTRL + C
  if (data === '\u0003') {
    // If found, exit the process
    process.exit(0);
    // If user types w or W move the snake up
  } else if (data === 'w' || data === "W") {
    connection.write("Move: up");
    // if user types a or A move the snake left
  } else if (data === 'a' || data === "A") {
    connection.write("Move: left");
    // if the user types s or S move the snake down
  } else if (data === 's' || data === "S") {
    connection.write("Move: down");
    // if the user types d or D move the snake right
  } else if (data === 'd' || data === "D") {
    connection.write("Move: right");
  }
};

// exports the setupInput file
module.exports = { setupInput };

