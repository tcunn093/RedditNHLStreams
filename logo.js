module.exports = {

	 getSrc: function(team){
	
		var teamStringArray = team.split(' ');
		var teamID = teamStringArray[teamStringArray.length - 1];

		return ('/images/' + teamID + ".png");

	}

}
