const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.223.133",
    port: 50542
  });

  conn.Name = "Name: NLG";

  conn.on('data', (data) => {
    console.log(data);
  })

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write(conn.Name);

    // conn.write('Move: down');

    // setTimeout(() => {
    //   conn.write('Move: down');
    // }, 200)

    // for (let i = 1; i < 20; i++) {
    //   setTimeout(() => {
    //     conn.write('Move: left')
    //   }, 500 * i)
    // }
  })


  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;

};

module.exports = connect;