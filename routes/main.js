// Node Modules
const path = require('path');

// Third Party Modules
const express = require('express');

// Router
const router = express.Router();


// '/' route for Main Page
router.get('/', (req, res, next) => {
   res.render('index', {
      path: '/',
      pageTitle: 'Home'
   });
});

module.exports = router;