const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

// gets all posts
router.get('/', (req, res) => {
  Post.findAll({
    attributes: ['id', 'title', 'content', 'created_at'],
    order: [['created_at', 'DESC']],
    include: [{
      model: User,
      attributes: ['username']
    },
    {
      model: Comment,
      attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
      include: {
        model: User,
        attributes: ['username']
      }
    }]
  })
    .then(postData => res.json(postData.reverse()))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// gets one post by id
router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'content', 'title', 'created_at'],
    include: [{
      model: User,
      attributes: ['username']
    },
    {
      model: Comment,
      atrtibutes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
      include: {
        model: User,
        attributes: ['username']
      }
    }]
  })
    .then(postData => {
      if (!postData) {
        res.status(400).json({ message: 'No post found ' });
        return;
      }
      res.json(postData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// creates a new post
router.post('/', withAuth, (req, res) => {
  Post.create({
    title: req.body.title,
    content: req.body.content,
    user_id: req.session.user_id
  })
    .then(postData => res.json(postData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// updates a post by id
router.put('/:id', withAuth, (req, res) => {
  Post.update({
    title: req.body.title,
    content: req.body.content
  }, {
    where: {
      id: req.params.id
    }
  }).then(postData => {
    if (!postData) {
      res.status(404).json({ message: 'No post found' });
      return;
    }
    res.json(postData);
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// deletes a post by id
router.delete('/:id', withAuth, (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(postData => {
      if (!postData) {
        res.status(404).json({ message: 'No post found' });
        return;
      }
      res.json(postData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
