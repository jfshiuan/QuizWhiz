var userData = require("../userData.json");
var status = require("../status.json");

exports.logout = function(req, res)
{  
	
	status["loginStatus"]["loggedIn"]="false";
	status["loginStatus"]["name"]="";
	status["loginStatus"]["username"]="";
	status["loginStatus"]["userType"]="";

	res.render("index");
};