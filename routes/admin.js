// Node Modules
const path = require('path');

//Third Party Modules
const express = require('express');

// Create Express Instance
const app = express();

// Create Router
const router = express.Router();

// Import Controllers
const adminController = require('../controllers/admin');
const adminLocalController = require('../controllers/admin-locals');

// Middleware

//// res.locals object
app.use((req, res, next) => {
   res.locals.ifComponent = true;
   console.log('did the middleware run?');
   next();
})

// Routes 

//// Main Admin '/admin/'
router.get('/admin/', adminController.getAdminHome);

//// Add-Class '/admin/add-class'
router.get('/admin/add-class', adminController.getAddClass);

//// Add-Race '/admin/add-race'
router.get('/admin/add-race', adminController.getAddRace);

//// Add-Spell '/admin/add-spell'
router.get('/admin/add-spell', adminController.getAddSpell);

// Export Routes
module.exports = router;