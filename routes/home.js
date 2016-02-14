var status = require("../status.json");

exports.home = function(req, res)
{  

	if (status["loginStatus"]["loggedIn"]=="false")
	{
		res.redirect('/');
	}
	else if(status["loginStatus"]["loggedIn"]=="true" && status["loginStatus"]["userType"]=="student")
	{
		res.render('student');
	}
	else if(status["loginStatus"]["loggedIn"]=="true" && status["loginStatus"]["userType"]=="instructor")
	{
		res.render('instructor');
	}
	else
	{
		console.log("error");
	}

};