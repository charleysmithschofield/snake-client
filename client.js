// client.js
const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541 // PORT number here,
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

  const say = process.argv[3];
  if (say) {
    conn.write(`"say: ${say}"`);
  }

  return conn;
};

console.log("Connecting ...");

module.exports = { connect };
