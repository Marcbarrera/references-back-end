const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  posts : [{type: ObjectId, ref: "Post"}],
}); 
userSchema.set("timestamps", true);
const User = mongoose.model('User', userSchema);

module.exports = User;