//////////////THIS PART MOVED TO THE client.js
/////const net = require("net");//////
//////////////



const connect = require('./client');
const setupInput = require('./input');



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
//connect(connect);



setupInput(connect());

