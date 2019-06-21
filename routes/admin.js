// Node Modules
const path = require('path');

//Third Party Modules
const express = require('express');

// Create Router
const router = express.Router();


// Routes 

//// Main Admin '/admin/'
router.get('/admin/', (req, res, next) => {
   res.render('admin/admin', {
      layout: 'admin',
      path: '/admin',
      pageTitle: 'Admin'
   });
});

//// Add-Spell '/admin/add-spell'
router.get('/admin/add-spell', (req, res, next) => {
   res.render('admin/add-spell', {
      layout: 'admin',
      path: '/admin/add-spell',
      pageTitle: 'Add Spell Info'
   });
});

//// Add-Class '/admin/add-class'
router.get('/admin/add-class', (req, res, next) => {
   res.render('admin/add-class', {
      layout: 'admin',
      path: '/admin/add-class',
      pageTitle: 'Add Class Info'
   });
});

//// Add-Race '/admin/add-race'
router.get('/admin/add-race', (req, res, next) => {
   res.render('admin/add-class', {
      layout: 'admin',
      path: '/admin/add-class',
      pageTitle: 'Add Class Info'
   });
});


// Export Routes
module.exports = router;