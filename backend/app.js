//constants required for the work application
const express = require('express');
const app = express();
const BodyParser = require('body-parser');
//body parser using
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:false}));
//application access throught out
app.use((request, reponse, next)=>{
  reponse.setHeader("Access-Control-Allow-Origin", "*");
  reponse.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  reponse.setHeader("Access-Control-Allow-Methodes", "GET, POST, DELETE, OPTIONS, PATCH");
  next();
});

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
     message:"successfully!",
     posts:posts
   });
})
app.post("/post", (request, reponse, next)=>{
const post = request.body;
console.log(post);
reponse.status(201).json({message:"successfully added the post!"}
)
});

module.exports = app;
