var userData = require("../userData.json");
var status = require("../status.json");
var questions = require("../questions.json");


exports.getSelectedCourse = function(req, res)
{
	res.json(status['loginStatus']['currentCourseID']);
};

exports.getCorrectAnswer = function(req,res)
{
	var arr = questions['course'];
	res.json();
}

