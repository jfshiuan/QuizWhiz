var userData = require("../userData.json");

exports.login = function(req, res) {  
	
	var username = req.query.username;
	var password = req.query.password;

	var arr = userData["loginData"];
	var validLogin = false;
	var userType;

	for(var i=0;i<arr.length;i++){
		var obj = arr[i];
		var uname, pw, type;
		for(var key in obj){
			var attrName = key;
			var attrValue = obj[key];

			if(attrName == "username")
			{
				uname=attrValue;
			}
			if(attrName == "password")
			{
				pw=attrValue;
			}
			if(attrName == "type")
			{
				type=attrValue;
			}
		}

		if(uname == username && pw == password)
		{
			validLogin=true;
			userType=type;
		}

	}




	if(validLogin)
	{
		if(userType=="student")
			res.render('student', userData);
		if(userType=="instructor")
		{
			res.render('instructor', userData);
		}
	}
	else
	{
		res.render('login', userData);
	}

 /*data["friends"].push({name: req.query.name, 
	 					   description: req.query.description, 
	 					   imageURL: 'http://lorempixel.com/400/400/people'});*/
};