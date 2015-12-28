
var mysql = require("mysql");


module.exports{

	connect: function() {

	

	con.connect(function(err){
  		if(err){
    		console.log('Error connecting to Db' + err);
    	return;
  	}
  		console.log('Connection established');
	});

	return con;

}

	getLogo: function(con, teamID){

		var query = "SELECT SUBSTRING_INDEX(Team_Name, ' ', -1) as id, Team_Logo FROM hockey.team_t Having id = \'" + teamID + "\';";

		con.query(query,function(err,rows){

		  if(err) throw err;

		  console.log('Data received from Db:\n');
		  
		  console.log(rows[0].Team_Logo);

		});

		return rows[0].Team_Logo;

	}

	end: function(con){

	con.end(function(err) {
	  // The connection is terminated gracefully
	  // Ensures all previously enqueued queries are still
	  // before sending a COM_QUIT packet to the MySQL server.
	});

}


}



