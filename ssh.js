const { Client } = require("node-scp");
const dotenv = require("dotenv").config();

const client1 = new Client();


async function startClient1() {
  await client1.on('ready', () => {
    console.log('FIRST :: connection ready');
    // Alternatively, you could use something like netcat or socat with exec()
    // instead of forwardOut(), depending on what the server allows
    conn1.forwardOut(process.env.BOOLE, 12345, process.env.GROVE, 22, (err, stream) => {
      if (err) {
        console.log('FIRST :: forwardOut error: ' + err);
        return conn1.end();
      }
      conn2.connect({
        sock: stream,
        username: process.env.SSH_USER,
        password: process.env.SSH_PASSWORD,
        tryKeyboard: true,
      });
    });
  }).connect({
    host: process.env.BOOLE,
    port: 22,
    username: process.env.SSH_USER,
    password: process.env.SSH_PASSWORD,
    tryKeyboard: true,
  });
  
  const client2.on = await Client('ready', () => {
    console.log('Client :: ready');
    conn.shell((err, stream) => {
      if (err) throw err;
      stream.on('close', () => {
        console.log('Stream :: close');
        conn.end();
      }).on('data', (data) => {
        console.log('OUTPUT: ' + data);
      });
      stream.end('ls -l\nexit\n');
    });
  })
}
  return client2;
module.exports = {
  startClient1,
};
