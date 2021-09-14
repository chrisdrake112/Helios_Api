const express = require("express");
const fs = require('fs');
const fileUpload = require("express-fileupload");

const app = express();

// Necessary to have access to the file in the req object
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);

app.get("/",(req,res) => {
//console.log(conn1);

});

app.post("/upload", function(req, res) {
  const ssh = require("./ssh")
  console.log(req.files);

  if(!req.files)
    {
      res.send("File was not found");
      return;
    }

fs.writeFile("/home/cdrakeford/apitest/" + req.files.file1234.name ,req.files.file1234.data,function(err){
    if(err) throw err;
    console.log("receieved");

});
  // Send the file to the other server
  // scp send file
  res.status(200).end();
});

app.listen(443, () => {
  console.log("App listening on 443");
});
