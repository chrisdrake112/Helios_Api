const { Client } = require("ssh2");
const dotenv = require("dotenv").config();


const client1 = new Client();
const client2 = new Client();

  function booleToGrove(){
    client1.on('ready', () => {
      console.log('FIRST :: connection ready');
    client1.forwardOut(process.env.BOOLE, 12345, process.env.GROVE, 22, (err, stream) => {
      if (err) {
        console.log('FIRST :: forwardOut error: ' + err);
        return conn1.end();
      }
      client2.connect({
        sock: stream,
        username: process.env.SSH_USER,
        password: process.env.SSH_PASSWORD,
        tryKeyboard: true,
      });
    });
  }).connect({
  host: process.env.BOOLE,
  username: process.env.SSH_USER,
  password: process.env.SSH_PASSWORD,
});
}

  function startGrove(){
  client2.on('ready', () => {
    // This connection is the one to 10.1.1.40
  console.log('SECOND :: connection ready');
    client2.shell('uptime', (err, stream) => {
      if (err) {
        console.log('SECOND :: exec error: ' + err);
        return client1.end();
      }

      stream.on('close', () => {
        client1.end(); // close parent (and this) connection
      }).on('data', (data) => {
        
        console.log(data.toString());
      });
    });
  })
  //return client2;
}
module.exports = {
  //startBoole,
  startGrove,
  //scpToBoole,
  booleToGrove,
}
