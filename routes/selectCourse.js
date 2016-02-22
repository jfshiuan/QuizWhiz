var userData = require("../userData.json");
var status = require("../status.json");
var courses = require("../courses.json");
var questions = require("../questions.json");

exports.selectCourse = function(req, res)
{  
	var courseID = req.body.courseDropdown;
	status["loginStatus"]["currentCourseID"] = courseID;


	var courseName="";

	var arr=courses;

	for(var i=0;i<arr.length;i++)
	{
		var obj = arr[i];
		var name, ID;
		for(var key in obj)
		{
			var attrName = key;
			var attrValue = obj[key];

			if(attrName == "courseID")
			{
				ID=attrValue;
			}
			if(attrName == "courseName")
			{
				name=attrValue;
			}
		}

		if(ID == courseID)
		{
			courseName=name;
		}

	}


	status["loginStatus"]["currentCourseName"] = courseName;

	if(status["loginStatus"]["action"]=="")
	{
		if(status["loginStatus"]["userType"]=="instructor")
		{
			res.render('instructor', status);
		}
		else
		{
			res.render('student', status);
		}
	}

	else if(status["loginStatus"]["action"]=="createQuiz")
	{
		res.render('createQuiz', {"status": status, "questions": questions});	
	}
	else if(status["loginStatus"]["action"]=="classStats")
	{
		res.render('classStats', {"status": status, "questions": questions});	
	}
	else if(status["loginStatus"]["action"]=="studentStats")
	{
		res.render('studentStats', {"status": status, "questions": questions});	
	}
	else if(status["loginStatus"]["action"]=="play")
	{
		res.redirect('/play');
	}
	else if(status["loginStatus"]["action"]=="myStats")
	{
		res.render('myStats', status);	
	}

};


exports.selectAction = function(req, res)
{
	status["loginStatus"]["action"]=req.body.action;
};