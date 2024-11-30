const express = require('express');

const app = express();
app.get("/",(req,res)=>{
  res.send("app is working...let's start")
});

app.listen(5000);