// input.js
let connection; // This will hold the connection object

const setupInput = function(conn) {
  connection = conn; // Store the connection object passed to setupInput
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function(data) {
  if (data === 'w' || data === "W") {
    connection.write("Move: up");
  } else if (data === 'a' || data === "A") {
    connection.write("Move: left");
  } else if (data === 's' || data === "S") {
    connection.write("Move: down");
  } else if (data === 'd' || data === "D") {
    connection.write("Move: right");
  }
};

module.exports = { setupInput };

