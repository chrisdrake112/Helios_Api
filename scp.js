const { Client } = require('node-scp')
const dotenv = require("dotenv").config();
const ssh = require("./ssh");


function scp1(fileName)
{
Client({
	host: process.env.BOOLE,
    port: 22,
    username: process.env.SSH_USER,
    password: process.env.SSH_PASSWORD,
    tryKeyboard: true,

}).then(client => {
  client.uploadFile("/Users/chrisdrakeford/apitest/" + fileName, "/home/cdrakeford/voice_input/" + fileName)
        .then(response => {
		  console.log(fileName + " uploaded")
          client.close() 
        })
        .catch(error => {})
}).catch(e => console.log(e))
}

function scp2(fileName)
{
Client({
	host: process.env.GROVE,
    port: 22,
    username: process.env.SSH_USER,
    password: process.env.SSH_PASSWORD,
    tryKeyboard: true,

}).then(client => {
  client.uploadFile("/home/cdrakeford/apitest/" + fileName, "/home/cdrakeford/apitest/" + fileName)
        .then(response => {
		  console.log(fileName + " uploaded")
          client.close() 
        })
        .catch(error => {})
}).catch(e => console.log(e))
}
module.exports = {
	scp1,
	scp2,
}