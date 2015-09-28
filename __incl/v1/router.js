

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

  router.get('/', function list(req, res) {
    var kind = req.query.publisher || model.config.gcloud.kind;
    var limit = parseInt(req.query.limit) || 0;
    model.list(limit, req.query.pageToken, kind, function(err, entities) {
      res.json(entities);
    });
  });

  router.get('/tr.gif', function list(req, res) {
    var data = req.query;
    var kind = data.publisher || config.gloud.kind;
    if (data.publisher){
      if (!data.timestamp){
        data.timestamp = new Date().getTime();
      }
      model.create(data, kind, function(err, savedData) {
        if (err) return handleRpcError(err, res);
      });
    }
    res.sendFile('pixel.gif', { root: model.config.gRoot + '/__public/'} , function(err){
      if (err) return handleRpcError(err);
    });
  });



  return router;

};
