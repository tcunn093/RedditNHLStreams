var express = require('express');
var fs 		= require('fs');
var request = require('request');
var scrape  = require('./scrape');
var cheerio = require('cheerio');

var app     = express();

app.use(express.static('public'));

app.get('/', function(req, res, next){

  res.sendFile('\\public\\index.html');
  res.end();

});

app.listen('8081')

console.log('Listening on port 8081');

exports = module.exports = app;


