var express = require('express');
var fs 		= require('fs');
var request = require('request');
var scrape  = require('./scrape');

var app     = express();

app.use(express.static(__dirname+'/public'));

app.use('/', function(req, res, next) {
  
	var games = [];

  	var url = 'https://www.reddit.com/r/NHLStreams';

  	request(url, function(error, response, html){

        if(!error){

            games.push(scrape.getGame(html));

        }

    })


  	console.log(games);

  	next();

});

app.get('/', function(req, res){

	res.write('test');
    res.sendFile('public/index.html');
    res.end();
	})

	app.listen('8081')

	console.log('Listening on port 8081');

	exports = module.exports = app;