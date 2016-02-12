var userData = require("../userData.json");




exports.signup = function(req, res) {  
	if(req.query.userType=="student"){
	res.render('student', userData);
}

else
{
	res.render('instructor', userData);
}

console.log(req.query.userType);
console.log(req.query.username);

	userData["loginData"].push({username: req.query.username, 
		password: req.query.password, 
		name: req.query.name,
		type: req.query.userType});
};