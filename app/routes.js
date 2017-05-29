//==============================================================================
// routes.js
// This file handles routes for the site
// By: Luis Castro
//==============================================================================

// Require express
var express = require('express');
var path = require('path');

// Create router object and export it
var router = express.Router();
module.exports = router;

// Home page route
router.get('/', function(req, res) {
    //res.send('Hello "/"');
    res.render(path.join(__dirname, '../views/index.jade'));
});

// About page route
router.get('/about', function(req, res) {
    //res.send('Welcome to About Page!');
    res.render(path.join(__dirname, '../views/about.jade'))
});

router.get('/contact', function(req, res) {
    //res.send('Welcome to the Contact Page!');
    res.render(path.join(__dirname, '../views/contact.jade'))
});
router.post('/contact');
