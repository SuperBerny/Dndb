// Core Node Modules
const path = require('path');

// Third Party Packages
const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

// Create Express Instance
const app = express();

//Setting Template Engine to Express-Handlebars
app.engine(
  'handlebars',
  expressHbs({
    layoutDir: 'views/layouts/',
    defaultLayout: 'main'
  })
);

// Set View Engine
app.set('view engine', 'handlebars');

// Template File Directory
app.set('views', 'views');

// Routes

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(41442);