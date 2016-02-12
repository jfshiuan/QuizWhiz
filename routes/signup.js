var userData = require("../userData.json");

exports.signup = function(req, res) {  
	res.render('signup', userData);

	userData["loginData"].push({username: req.query.username, 
		password: req.query.password, 
		name: req.query.name});
};