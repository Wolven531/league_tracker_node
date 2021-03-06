'use strict';

var express = require('express');
var router = express.Router();

module.exports = function(app){
  router.get('/', function(req, res, next) {
    res.render('items', {
      title: 'Items',
      version: app.get('dragon_version'),
      items: app.get('ordered_items'),
      itemMap: app.get('items_by_id'),
      itemTags: app.get('item_tags')
    });
    return;
  });
  return router;
};
