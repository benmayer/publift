// Publift Yield Expert 
// Copyright 2015, Ben Mayer
// Auhtor: Ben Mayer
// Author Site:  ben-mayer.com
// Version 1.0


// requirements files
//   app js 
//       express 
//       config js 
//       model-datastore.js 
//          gcloud
//       crud
//          express 
//          body parser


'use strict';

var express = require('express');
var config = require('./config');
var inclPath = './__incl/v'+ config.version;

var app = express();

// Tracking Request
var model = require(inclPath+'/model-' + config.dataBackend)(config);


app.use('/tracking', require(inclPath+'/crud')(model));
// app.use('/tracking', express.static('html'));
// app.use('/api/tracking', require('./tracking/api')(model));
// app.use('/api', require('./_incl/gapi')(model));


// homepage
app.get("/", function(req, res) {
  res.redirect('/api');
});

// Basic error handler
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


// [START server]
// Start the server
var server = app.listen(config.port, function () {
  var host = this.address().address;
  var port = this.address().port;

  console.log('App listening at http://%s:%s', host, port);
});
// [END server]
