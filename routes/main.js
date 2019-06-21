// Node Modules
const path = require('path');

// Third Party Modules
const express = require('express');

// Router
const router = express.Router();

//Routes

//// Main Page '/'
router.get('/', (req, res, next) => {
   res.render('index', {
      path: '/',
      pageTitle: 'Home'
   });
});


// Export Routes
module.exports = router;