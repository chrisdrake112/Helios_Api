const { Client } = require('node-scp')
const dotenv = require("dotenv").config();
const ssh = require("./ssh");

// with ES Module
function scp1(fileName)
{
Client({
	host: process.env.BOOLE,
    port: 22,
    username: process.env.SSH_USER,
    password: process.env.SSH_PASSWORD,
    tryKeyboard: true,

}).then(client => {
  client.uploadFile("/Users/chrisdrakeford/Apitest/" + fileName, "/home/cdrakeford/apitest/" + fileName)
        .then(response => {
		  console.log(fileName + " uploaded")
          client.close() // remember to close connection after you finish
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
          client.close() // remember to close connection after you finish
        })
        .catch(error => {})
}).catch(e => console.log(e))
}
module.exports = {
	scp1,
	scp2,
}