const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handle incoming data and log it for the player
  conn.on("data", (data) => {
    console.log(`"Received data", ${data}`);
  });

  // handle connection established
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    // set the name
    const name = process.argv[2];

    // Send the name of each snake as soon as the connection is established
    conn.write(`"Name: ${name}"`);

    // // Send the "Move: up" command every 50 ms
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);
    // // Add these soon
    // conn.write("Move: down"); // unless facing up
    // conn.write("Move: left"); // unless facing right
    // conn.write("Move: right"); // unless facing left
  });

  
  return conn;
};


console.log("Connecting ...");

module.exports = connect;


