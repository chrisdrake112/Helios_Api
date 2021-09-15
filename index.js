const express = require("express");
const fs = require("fs");
const fileUpload = require("express-fileupload");
const ssh = require("./ssh");

const app = express();

let sshClient;

// Necessary to have access to the file in the req object
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);

app.post("/api", async function (req, res) {
  if (!req.files) {
    res.send("File was not found");
    return;
  }

  fs.writeFile("/Users/chrisdrakeford/Apitest/" + req.files.file1234.name,req.files.file1234.data,function(err){
    if(err) throw err;
    console.log("receieved");
 
});

  await sshClient.uploadFile(req.files.file1234.name,"/home/cdrakeford/apitest/");


  res.status(200).end();
});

app.listen(443, async () => {
  console.log("App listening on 443");
  sshClient = await ssh.start();
});