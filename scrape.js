var cheerio = require('cheerio');
var gameObj = require('./game');

module.exports = {

		getGame: function (html) {

			var $ = cheerio.load(html);
			var game = "";

			$('.title.may-blank').filter(function (){

				var data = $(this);

				if (data.toString().indexOf("Game Thread") > -1){

					game = getData(data);

					console.log(data.text());

					console.log(game);

				}

			})

			return game;	

		}
	}

var getData = function(data){

	var game = gameObj();
	var dataText = data.text().split(' ');

	game.homeTeam = dataText[2];
	game.awayTeam = dataText[4];
	game.threadURL = data.attr('href');

	return game;

}

