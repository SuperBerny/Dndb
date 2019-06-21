// Node Modules
const path = require('path');

// Third Party Modules
const express = require('express');

// Import Controllers
const mainController = require('../controllers/main');

// Router
const router = express.Router();

//Routes

//// Main Page '/'
router.get('/', mainController.getHomePage);


// Export Routes
module.exports = router;