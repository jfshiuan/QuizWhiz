var userData = require("../userData.json");
var status = require("../status.json");

exports.login = function(req, res)
{  
	
	var username = req.query.username;
	var password = req.query.password;

	var arr = userData["loginData"];
	var validLogin = false;
	var userType, name;

	for(var i=0;i<arr.length;i++)
	{
		var obj = arr[i];
		var uname, pw, type, nam;
		for(var key in obj)
		{
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
			if(attrName == "name")
			{
				nam=attrValue;
			}
		}

		if(uname == username && pw == password)
		{
			validLogin=true;
			userType=type;
			name=nam;
		}

	}




	if(validLogin)
	{
		status["loginStatus"]["loggedIn"]="true";
		status["loginStatus"]["name"]=name;
		status["loginStatus"]["username"]=username;
		status["loginStatus"]["userType"]=userType;

		if(userType=="student")
		{
			res.render('student', userData);
		}
		if(userType=="instructor")
		{
			res.render('instructor', userData);
		}
	}
	else
	{
		status["loginStatus"]["loggedIn"]="false";
		status["loginStatus"]["name"]="";
		status["loginStatus"]["username"]="";
		status["loginStatus"]["userType"]="";
		res.render('login', userData);
	}

 /*data["friends"].push({name: req.query.name, 
	 					   description: req.query.description, 
	 					   imageURL: 'http://lorempixel.com/400/400/people'});*/
};