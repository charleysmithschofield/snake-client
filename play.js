// play.js
const { connect } = require("./client");
const { setupInput } = require("./input");

// logs Connecting.. when the connection is being established
console.log("Connecting ...");
const conn = connect();

setupInput(conn);

// Enter the process to allow users exit using CTRL + C
process.on('SIGINT', () => {
  console.log("Exiting...");
  // Ends the connection
  conn.end();
  // Exit the process
  process.exit(0);
});