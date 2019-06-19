// Core Node Modules
const path = require('path');

// Third Party Packages
const express = require('express');
const bodYParser = require('boduy-parser');
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

app.set('view engine', 'handlebars');
app.set('views', 'views');