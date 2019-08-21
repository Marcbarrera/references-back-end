const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const userSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  year: {
    type: Number,
    required: true
  },
  song1: {
    type: String,
  },
  Link1:{
    type: String,
  },
  album1: {
    type: String,
  },
  artist1: {
    type: String,
  },
  year2: {
    type: Number,
    required: true
  },
  song2:{
    type: String,
  },
  link2:{
    type: String,
  },
  album2: {
    type: String,
  },
  artist2: {
    type: String,
  },
  description: {
    type: String,
  },
  url1: {
    type: String
  },
  url2: {
    type: String
  },
  user: {
      type: ObjectId,
      ref: 'User'
  }, 
},
 {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Post = mongoose.model('Post', userSchema);

module.exports = Post;