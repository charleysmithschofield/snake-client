// play.js
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const conn = connect();

setupInput(conn);

// Handle CTRL+C (SIGINT signal)
process.on('SIGINT', () => {
  console.log("Exiting gracefully...");
  conn.end(); // Close the connection
  process.exit(0); // Exit the process with a successful status code
});