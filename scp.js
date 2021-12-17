const { Client } = require('node-scp')
const dotenv = require("dotenv").config();
const ssh = require("./ssh");

const VMAToBoole = "/Users/chrisdrakeford/apitest/"
const booleFromVMA = "/home/cdrakeford/voice_input/"
const booleToVMA = "/home/cdrakeford/voice_output"
const VMAFromBoole = "/Users/chrisdrakeford/voice_output"

function scp1(fileName)
{
Client({
	host: process.env.BOOLE,
    port: 22,
    username: process.env.SSH_USER,
    password: process.env.SSH_PASSWORD,
    tryKeyboard: true,

}).then(client => {
  client.uploadFile(VMAToBoole + fileName, booleFromVMA+ fileName)
        .then(response => {
		  console.log(fileName + " uploaded to boole")
          client.close() 
        })
        .catch(error => {})
}).catch(e => console.log(e))
}

function scp2()
{
Client({
	host: process.env.BOOLE,
    port: 22,
    username: process.env.SSH_USER,
    password: process.env.SSH_PASSWORD,
    tryKeyboard: true,

}).then(client => {
  client.downloadDir(booleToVMA , VMAFromBoole)
        .then(response => {
		  console.log("Downloaded to vma")
          client.close() 
        })
        .catch(error => {})
}).catch(e => console.log(e))
}
module.exports = {
	scp1,
	scp2,
}