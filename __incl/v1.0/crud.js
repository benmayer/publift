

'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var count = 0;


module.exports = function(model) {

  var router = express.Router();

  router.use(bodyParser.urlencoded({extended: true}));

  function handleRpcError(err, res) {
    res.status(err.code || 500).send(err.message);
  }

  router.use(function(req, res, next){
    res.status(200);
    next();
  });

  router.get('/pixel.gif', function list(req, res) {
    var data = req.query;
    // config.gloud.kind = data.publisher;
    var kind = data.publisher;

    // console.log(data);
    if (data.order){
      console.log(data);
      var tracking  = model.list(10, req.query.pageToken, kind, function(err, entities) {
        if (err) return handleRpcError(err, res);
        model.create(data, kind, function(err, savedData) {
          if (err) return handleRpcError(err, res);
          // res.redirect(req.baseUrl);
          console.log(savedData);
          count+=1;
        });
      });
    }
    console.log("respond end");
    res.end();
    // res.end();
  });

  // router.get('/api/', function list(req, res) {
  //   var data = data.publisher;
  //   var kind = data.publisher;
  //   var api  = model.read(id, kind, cb) {

  //   }
  // });

  return router;

};
