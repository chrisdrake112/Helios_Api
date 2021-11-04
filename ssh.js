const { Client } = require("ssh2");
const dotenv = require("dotenv").config();


const client1 = new Client();
const client2 = new Client();

  function booleToGrove(){
    client1.on('ready', () => {
      console.log('FIRST :: connection ready');
    client1.forwardOut(process.env.BOOLE, 22, process.env.GROVE, 22, (err, stream) => {
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

  function startBoole(){
  client2.on('ready', () => {
    
  console.log('SECOND :: connection ready');
    client2.exec('touch file1.txt', (err, stream) => {
      if (err) {
        console.log('SECOND :: exec error: ' + err);
        return client1.end();
      }

      stream.on('close', () => {
        client1.end();
      }).on('data', (data) => {
        
        console.log(data.toString());
      });
    });
  }).connect({
    host: process.env.BOOLE,
    username: process.env.SSH_USER,
    password: process.env.SSH_PASSWORD,
  });
}
module.exports = {
  startBoole,
  //startGrove,
  //scpToBoole,
  //booleToGrove,
}
