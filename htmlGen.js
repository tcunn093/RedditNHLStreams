var request = require('request');
var scrape  = require('./scrape');
var cheerio = require('cheerio');
var fs    = require('fs');

function updateHTML(games, callback){

  var htmlSource = __dirname + '\\public\\indexRAW.html'
  var htmlDest = __dirname + '\\public\\index.html'


  var $ = cheerio.load(fs.readFileSync(htmlSource));

  for (game in games){

    $('#gameLinks').append(generateGameRow(games[game]));
    
  }

  fs.writeFile(htmlDest, $.html(), function(err) {

    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");

    callback();

  });

};


function getGamesInfo(callback) {

  var url = 'https://www.reddit.com/r/NHLStreams';

  var games = [];

  request(url, function(error, response, html){

      if(!error){

          games = scrape.getGames(html);

      }

      callback(error, games);
      
  })

}

function generateGameRow(game){


  var sRow = '<tr>';

  var sHomeCol = '<td><div id="home"><img src="' +  game.homeLogo +  '" width=200px></div></td>';
  var vsCol = '<td><div id="vs"><h1>vs</h1></div></td>';
  var sAwayCol = '<td><div id="away"><img src="' +  game.awayLogo +  '" width=200px></div></td>';

  var eRow = '</tr>';
  return (sRow + sHomeCol + vsCol + sAwayCol + eRow);

}


getGamesInfo(function(error, games){

    if (error) {

      console.log(error);

    } else {

      updateHTML(games, function(){console.log(games)});
      
    }

  }

);


