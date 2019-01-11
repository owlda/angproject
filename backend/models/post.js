const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
});
// export model to use outside this file
module.exports = mongoose.model('Post', PostSchema);
