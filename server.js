// Core Node Modules
const path = require('path');

// Third Party Packages
const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

// Import Routes
const mainRoutes = require('./routes/main');
const adminRoutes = require('./routes/admin');
// Create Express Instance
const app = express();

// Setting Template Engine to Express-Handlebars
app.engine(
  'handlebars',
  expressHbs({
    defaultLayout: 'main',
    layoutDir: 'views/layouts',
    partialDir: 'views/partials'
  })
);

// Set View Engine
app.set('view engine', 'handlebars');
app.set('views', 'views');

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware

//// setting app.locals
app.use((req, res, next) => {
   app.locals.test = 'I\m alive!';
   next(); //remember to call next() otherwise server.js stops here
});

// Handle Routes

//// Main Routes
app.use(mainRoutes);

//// Admin Routes
app.use(adminRoutes);

//// 404
app.use((req, res, next) => {
  res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

// Listening on Port 41442
app.listen(41442);

