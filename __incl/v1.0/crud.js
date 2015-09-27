

'use strict';

var express = require('express');

module.exports = function(model) {

  var router = express.Router();

  function handleRpcError(err, res) {
    res.status(err.code || 500).send(err.message);
  }

  router.use(function(req, res, next){
    res.status(200);
    next();
  });

  router.get('/pixel.gif', function list(req, res) {
    var data = req.query;
    var kind = data.publisher || config.gloud.kind;

    if (data.order){
      model.create(data, kind, function(err, savedData) {
        if (err) return handleRpcError(err, res);
      });
    }
    res.sendFile('pixel.gif', { root: model.config.gRoot + '/__public/'} , function(err){
      if (err) return handleRpcError(err);
    });
  });

  // router.get('/api/', function list(req, res) {
  //   var data = data.publisher;
  //   var kind = data.publisher;
  //   var api  = model.read(id, kind, cb) {

  //   }
  // });

  return router;

};
