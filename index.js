const express = require("express");
const fs = require("fs");
const fileUpload = require("express-fileupload");
const ssh = require("./ssh");
const scp = require("./scp");

const app = express();

// Necessary to have access to the file in the req object
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);

app.post("/api", function (req, res) {
  if (!req.files) {
    res.send("File was not found");
    return;
  }

const fileName = req.files.file1234.name;
console.log("/Users/chrisdrakeford/Apitest/" + fileName)

fs.writeFile("/Users/chrisdrakeford/Apitest/" + fileName,req.files.file1234.data,function(err){
  if(err) throw err;
  console.log("receieved");

scp.scp1(fileName);
ssh.booleToGrove();
scp.scp2(fileName);
ssh.startGrove();

});
  res.status(200).end();
});

app.listen(443, () => {
  console.log("App listening on 443");
});