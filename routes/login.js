var userData = require("../userData.json");

exports.login = function(req, res) {  
	res.render('login', userData);



 /*data["friends"].push({name: req.query.name, 
	 					   description: req.query.description, 
	 					   imageURL: 'http://lorempixel.com/400/400/people'});*/
};