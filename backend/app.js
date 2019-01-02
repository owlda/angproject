const express = require('express');
const app = express();

app.use((request, reponse, next)=>{
  console.log('express')
  next();
})

app.use((request, reponse, next)=>{
   reponse.send('reponse from express')
})

module.exports = app;
