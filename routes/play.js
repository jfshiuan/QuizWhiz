var status = require("../status.json");
var questions = require("../questions.json");

exports.play = function(req, res)
{  
	status["loginStatus"]["questionNumber"]=0;
	status["loginStatus"]["score"]=0;
	status["loginStatus"]["totalScore"]=0;

	var course=status["loginStatus"]["currentCourseID"];
	if(course =="" || course==-1 || course==undefined)
	{
		res.render('student', status);
	}

	else
	{
		var qs;
		var arr = questions["course"];

		for(var i=0;i<arr.length;i++)
		{
			var obj = arr[i];
			var problems, cID;
			for(var key in obj)
			{
				var attrName = key;
				var attrValue = obj[key];

				if(attrName == "courseID")
				{
					cID=attrValue;
				}
				if(attrName == "problems")
				{
					problems=attrValue;
				}
			}

			if(course==cID)
			{
				qs=problems[status["loginStatus"]["questionNumber"]];
			}

		}

		status["loginStatus"]["questionNumber"] = status["loginStatus"]["questionNumber"] + 1;
		res.render('play', {"status": status, "qs":qs});
	}
};

exports.submitAnswer = function(req, res)
{

	var course=status["loginStatus"]["currentCourseID"];
	if(course =="" || course==-1 || course==undefined)
	{
		res.render('student', status);
	}

	else
	{
		var qs;
		var arr = questions["course"];

		for(var i=0;i<arr.length;i++)
		{
			var obj = arr[i];
			var problems, cID;
			for(var key in obj)
			{
				var attrName = key;
				var attrValue = obj[key];

				if(attrName == "courseID")
				{
					cID=attrValue;
				}
				if(attrName == "problems")
				{
					problems=attrValue;
				}
			}

			if(course==cID)
			{
				status["loginStatus"]["totalScore"]=status["loginStatus"]["totalScore"] + 1;

				if (req.query.studentAnswer==problems[status["loginStatus"]["questionNumber"]-1]["correctAnswer"])
				{
					console.log("correct");
					status["loginStatus"]["score"]=status["loginStatus"]["score"] + 1;
				}
				else
				{
					console.log("incorrect");
				}

				qs=problems[status["loginStatus"]["questionNumber"]];
			}

		}

		if(qs==undefined)
		{
			res.render('endOfMatch', status);
		}
		else
		{
			status["loginStatus"]["questionNumber"] = status["loginStatus"]["questionNumber"] + 1;
			res.render('play', {"status": status, "qs":qs});
		}
	}



}