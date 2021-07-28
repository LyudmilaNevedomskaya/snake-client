//////////////THIS PART MOVED TO THE client.js
/////const net = require("net");//////
//////////////


const { stdin } = require('process');
const connect = require('./client')



//////////////THIS PART MOVED TO THE client.js
// establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: "135.23.223.133",
//     port: 50542
//   });

//   conn.on('data', (data) => {
//     console.log(data);
//   })

//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   return conn;

// };
////////////////////////////////////////////////////////



console.log("Connecting ...");
connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (input) {
  if (input === '\u0003') {
    process.exit();
  }
};


setupInput();