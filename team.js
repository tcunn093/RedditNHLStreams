
function getTeams(games){

	for (game in games){

		console.log(getTeam('home', games[game]));

		console.log(getTeam('away', games[game]));

	}

}

function getTeam(homeOrAway, game){

	var gameStringArray;

	gameStringArray = game.split(" ");

	return (homeOrAway =='home') ? gameStringArray[2]: gameStringArray[4];

}

function getLogoBlob(team)

getTeams(games);