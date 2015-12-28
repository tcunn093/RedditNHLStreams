var cheerio = require('cheerio');
var gameObj = require('./game');
var database = require('./database');

module.exports = {

		getGame: function (html, con) {

			var $ = cheerio.load(html);
			var game = "";

			$('.title.may-blank').filter(function (){

				var data = $(this);

				if (data.toString().indexOf("Game Thread") > -1){

					game = getData(con, data);

					console.log(data.text());

					console.log(game);

				}

			})

			return game;	

		}
	}

var getData = function(con, data){

	var game = gameObj();
	var dataText = data.text().split(' ');

	game.homeTeam = dataText[2];
	game.awayTeam = dataText[4];
	game.threadURL = data.attr('href');

	game.homeLogo = database.getLogo(con, game.homeTeam);
	game.awayLogo = database.getLogo(con, game.awayTeam);

	return game;

}

