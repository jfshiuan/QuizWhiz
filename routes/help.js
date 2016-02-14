var status = require("../status.json");

exports.help = function(req, res)
{  

	if (status["loginStatus"]["loggedIn"]=="false")
	{
		res.render('loginHelp');
	}
	else if(status["loginStatus"]["loggedIn"]=="true" && status["loginStatus"]["userType"]=="student")
	{
		res.render('studentHelp');
	}
	else if(status["loginStatus"]["loggedIn"]=="true" && status["loginStatus"]["userType"]=="instructor")
	{
		res.render('instructorHelp');
	}
	else
	{
		console.log("error");
	}

};