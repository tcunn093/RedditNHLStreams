var cheerio = require('cheerio');
var gameObj = require('./game');
var logo = require('./logo');

module.exports = {

		getGames: function (html) {

			var $ = cheerio.load(html);
			var games = [];

			$('.title.may-blank').filter(function (){

				var data = $(this);

					if (data.toString().indexOf("Game Thread") > -1){
						
						games.push(getData(data));

					}

				

			})

			return games;	

		}
	}

var getData = function(data){

	var game = gameObj();
	var dataText = data.text().split(' ');

	game.homeTeam = (dataText[3]  == "at") ? dataText[2] : (dataText[2]+ " " + dataText[3]);
	game.awayTeam = (dataText[dataText.length - 4] == "at") ? dataText[dataText.length - 3]: dataText[dataText.length - 4] + " " + dataText[dataText.length - 3];

	game.threadURL = data.attr('href');

	game.homeLogo = logo.getSrc(game.homeTeam);
	game.awayLogo = logo.getSrc(game.awayTeam);

	game.startTime = dataText[5] + ' ' + dataText[6];

	return game;

}




