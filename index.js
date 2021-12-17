const express = require("express");
const fs = require("fs");
const fileUpload = require("express-fileupload");
const sleep = require("sleep");
const ssh = require("./ssh");
const scp = require("./scp");
const router = express.Router();
const multer = require("multer");

const app = express();

app.use(express.static("public"));
const hostDir = "/Users/chrisdrakeford/Apitest/";
const downloadDir = "/Users/chrisdrakeford/voice_output/";

// Necessary to have access to the file in the req object
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);


app.post('/anlyse', function (req,res){

  if (!req.files) {
  res.send("File was not found");
  return;
}


});

app.post('/api',/*upload.single('file1234'),*/ function (req, res) {
  if (!req.files) {
    res.send("File was not found");
    return;
  }

const fileName = req.files.file1234.name;
console.log(hostDir + fileName)

fs.writeFile(hostDir + fileName,req.files.file1234.data,function(err){
  if(err) throw err;
  console.log("receieved");

scp.scp1(fileName);
//ssh.booleToGrove();
ssh.startBoole();
scp.scp2();

var audioFiles = fs.readdirSync(downloadDir);
for(let i = 0; i < audioFiles.length; i++)
{
  res.download(downloadDir + audioFiles[i]);
  console.log(downloadDir + audioFiles[i]);
}

});
  res.status(200)
});

//module.exports = router;

app.listen(443, () => {
  console.log("App listening on 443");
});