//constants required for the work application
const express = require('express');
const app = express();
const BodyParser = require('body-parser');
const mongoose = require('mongoose');
//post model
const Post = require('./models/post');
//connection string to MongoDB cluster
mongoose.connect("mongodb+srv://userdb:96560023_ad@clustermdb-wbnah.mongodb.net/angular-db?retryWrites=true").then(() => {
  console.log('Connection to database was successully.');
}).catch(() => {
  console.log('Connection to database was failed.');
});
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

// method to save post to db Mongo Atlas
app.post("/posts", (request, reponse, next)=>{
  const post = new Post({
    title: request.body.title,
    content: request.body.content
  });
  post.save();
  console.log(post);
  reponse.status(201).json({message:"successfully added the post!"});
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
});




module.exports = app;
