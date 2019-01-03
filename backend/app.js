const express = require('express');
const app = express();

app.use('/posts', (request, reponse, next)=>{
  const posts = [
    {id:"09945",
    title:"first post",
    content:"message here..."},
    {id:"099scs",
    title:"second post",
    content:"message here...too"}
  ];
   reponse.status(200).json({
     message:"succesfully!",
     posts:posts
   });
})

module.exports = app;
