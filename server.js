const express = require("express");
const path =require('path');
const app = express();

app.use(express.static(_dirname+'/dist/phoneapp'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(_dirname+'/dist/phoneapp/index.html'));
})
  
app.listen(process.env.PORT);

console.log("Server is running ...");