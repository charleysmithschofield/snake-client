// input.js
// This will hold the connection object
let connection;

// sets up the user input
const setupInput = function(conn) {
  // Store the connection object passed to setupInput
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

const move = {
  'w': 'Move: up',
  'a': 'Move: left',
  'd': 'Move: right',
  's': 'Move: down'
};

const say = {
  'r': "Say: Hissss",
  'e': "Say: Can't beat me!",
  'f': "Say: I put up a good fight!"
};

// define handleUserInput function
const handleUserInput = function(data) {
  // Check for CTRL + C
  if (data === '\u0003') {
    process.exit();
  } if (move[data]) {
    connection.write(move[data]);
  } if (say[data]) {
    connection.write(say[data]);
  }
};

// exports the setupInput file
module.exports = { setupInput };