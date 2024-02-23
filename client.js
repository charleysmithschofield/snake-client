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
    console.log("Connected to game server");
  });
  
  return conn;
};

console.log("Connecting ...");
connect();

module.exports = connect;