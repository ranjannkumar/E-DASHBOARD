const express = require('express');

const app = express();
app.get("/",(req,res)=>{
  res.send("app is working...let's go")
});

app.listen(5000);