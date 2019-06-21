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


// Export Routes
module.exports = router;