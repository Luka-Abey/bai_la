const express = require('express');
const router = express.Router();

const Post = require('../models/Post');

router.get('/', (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
});

router.post('/', (req, res) => {
  const newPost = new Post({
    postBody: req.body.postBody
  });
  newPost.save().then(post => res.json(post));
});

router.delete('/:id', (req, res) => {
  Post.findById(req.params.id)
    .then(post => 
      post.remove()
    .then(() => res.json({ success: true }))
    )
    .catch(err => res.status(404).json({ success: false }));
})

module.exports = router;