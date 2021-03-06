var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let blogPosts = [
    {
      title: 'Perk is for real!',
      body: '...',
      author: 'Aaron Larner',
      publishedAt: new Date('2016-03-19'),
      createdAt: new Date('2016-03-19')
    },
    {
      title: 'Development continues...',
      body: '...',
      author: 'Aaron Larner',
      publishedAt: new Date('2016-03-18'),
      createdAt: new Date('2016-03-18')
    },
    {
      title: 'Welcome to Perk!',
      body: '...',
      author: 'Aaron Larner',
      publishedAt: new Date('2016-03-17'),
      createdAt: new Date('2016-03-17')
    }
  ]
  res.render('index', { posts: blogPosts });
});

module.exports = router;
