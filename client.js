
// Import the 'net' module which provides functionality for creating a TCP server and a client server
const net = require("net");

// Import IP and PORT constants from the constants.js file
const { IP, PORT } = require("./constants");


// Function to establish a connection with the server
const connect = function() {
  // Create a new TCP connection to the specified host and port
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  // Create an event listener for handling incoming data from the server
  conn.on("data", (data) => {
    // Log the received data to the console
    console.log(`Received data: ${data}`);
  });

  // Create an event listener for when the connection is established
  conn.on("connect", () => {
    // Log successful connection message
    console.log("Successfully connected to game server");
    // Get the player's name (initials) from command line arguments
    const name = process.argv[2];
    // Send the player's name (initials) to the server
    conn.write(`Name: ${name}`);
  });

  // Return the connection object
  return conn;
};
// Log a message indicating connection initiation
console.log("Connecting ...");

// Export the connect function to make it accessible to other files
module.exports = { connect };
