// Node Modules
const path = require('path');

//Third Party Modules
const express = require('express');

// Create Router
const router = express.Router();

// Import Controllers
const adminController = require('../controllers/admin');

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