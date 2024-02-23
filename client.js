// client.js
const net = require("net");
// require IP and PORT from constant.js file
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(`Received data: ${data}`);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    const name = process.argv[2];
    conn.write(`Name: ${name}`);
  });

  return conn;
};

console.log("Connecting ...");

module.exports = { connect };
