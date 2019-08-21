'use strict';

const express = require('express');
const createError = require('http-errors');

const router = express.Router();
const bcrypt = require('bcrypt');

const Post = require('../models/Post');
const User = require('../models/User');

const {
  isLoggedIn,
  isNotLoggedIn,
  validationLoggin
} = require('../helpers/middlewares');

router.post('/create', isLoggedIn(), async (req, res, next) => {
  try{
    //   console.log('req.body   ---------' , req.body)
    const {_id, year, title, song1, link1, album1, artist1, year2, song2, link2, album2, artist2, description, url1, url2} = req.body
    const newPost = await Post.create({ user: _id, year, title, song1, link1, album1, artist1, year2,song2, link2, album2, artist2, description, url1, url2})
    // console.log(newPost)
    const id = newPost._id
    const myId = req.session.currentUser._id
    const newone = await User.findByIdAndUpdate(myId, {$push: {posts: id}}, {new:true}).populate('posts')
    // console.log(newone)
    req.session.currentUser = newone
    res.status(201).json(newPost)
  }catch(err){
      next(err)
  }
});

router.get('/getAll', isLoggedIn(), async (req, res, next) => {
    try{
        const posts = await Post.find().populate('user')
        res.status(201).json(posts)
    }catch(err){
        next(err)
    }
});

router.get('/:id', isLoggedIn(), async (req, res, next) => {
  try{
      const id = req.params.id
      const posts = await Post.findById(id).populate('user')
      res.status(201).json(posts)
  }catch(err){
      next(err)
  }
});

module.exports = router;
