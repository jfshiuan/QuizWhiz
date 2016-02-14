var userData = require("../userData.json");
var status = require("../status.json");



exports.signup = function(req, res) {  

	status["loginStatus"]["loggedIn"]="true";
	status["loginStatus"]["name"]=req.query.name;
	status["loginStatus"]["username"]=req.query.username;
	status["loginStatus"]["userType"]=req.query.userType;




userData["loginData"].push(
{
	username: req.query.username, 
	password: req.query.password, 
	name: req.query.name,
	type: req.query.userType
});

if(req.query.userType=="student")
{
	res.render('student', status);
}

else
{
	res.render('instructor', status);
}

console.log(status);
};