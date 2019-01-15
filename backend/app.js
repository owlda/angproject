//constants required for the work application
const express = require('express');
const app = express();
const BodyParser = require('body-parser');
const mongoose = require('mongoose');
//Post model
const Post = require('./models/post');

//Connection string to MongoDB cluster
mongoose.connect("mongodb+srv://userdb:96560023_ad@clustermdb-wbnah.mongodb.net/angular-db?retryWrites=true", { useNewUrlParser: true }).then(() => {
  console.log('Connection to database was successully.');
}).catch(() => {
  console.log('Connection to database was failed.');
});

//Body parser using
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:false}));

//application access throught out
app.use((request, reponse, next)=>{
  reponse.setHeader("Access-Control-Allow-Origin", "*");
  reponse.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  reponse.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS, PATCH");
  //Access-Control-Allow-Methods
  next();
});

// Method to save post to db Mongo Atlas
app.post("/posts", (request, reponse, next)=>{
  const post = new Post({
    title: request.body.title,
    content: request.body.content
  });
  post.save().then(createdID => {
    reponse.status(201).json({
      message:"successfully added the post!",
      postID: createdID._id
    });

  });

});
// Method to delete the post from Mongo db Atlas
app.delete("/posts/:id", (request, reponse, next) => {
  Post.deleteOne({_id: request.params.id }).then(result => {
    console.log(result);
    reponse.status(200).json({ message:"successfully deleted the post!" });
  });
 });
// Method to get post from Mongo db Atlas
app.get('/posts', (request, reponse, next) => {
    // Static methode from mongoose Post
    Post.find().then(documents => {
      reponse.status(200).json({
        message:"successfully get the post!",
        posts: documents });
    });
});

// Export app to out of the class
module.exports = app;
