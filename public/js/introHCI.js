'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
 function initializePage() {
	//$('.project a').click(addProjectDetails);
	//$('#loginBtn').click(login);
	$('#toggleClick').click(toggleSignup);
}


function checkSignup(form)
{

	if(form.userType.value == "") {
		alert("Error: User type cannot be blank!");
		form.userType.focus();
		return false;
	}

	if(form.name.value == "") {
		alert("Error: Name cannot be blank!");
		form.name.focus();
		return false;
	}

	if(form.username.value == "") {
		alert("Error: Username cannot be blank!");
		form.username.focus();
		return false;
	}

	var re = /^\w+$/;
	if(!re.test(form.username.value)) {
		alert("Error: Username must contain only letters, numbers and underscores!");
		form.username.focus();
		return false;
	}



	if(form.password.value != "" && form.password.value == form.password2.value) {
		if(form.password.value.length < 6) {
			alert("Error: Password must contain at least six characters!");
			form.password.focus();
			return false;
		}
		if(form.password.value == form.username.value) {
			alert("Error: Password must be different from Username!");
			form.password.focus();
			return false;
		}
		/*re = /[0-9]/;
		if(!re.test(form.password.value)) {
			alert("Error: password must contain at least one number (0-9)!");
			form.password.focus();
			return false;
		}
		re = /[a-z]/;
		if(!re.test(form.password.value)) {
			alert("Error: password must contain at least one lowercase letter (a-z)!");
			form.password.focus();
			return false;
		}
		re = /[A-Z]/;
		if(!re.test(form.password.value)) {
			alert("Error: password must contain at least one uppercase letter (A-Z)!");
			form.password.focus();
			return false;
		}*/
	} else {
		alert("Error: Please check that you've entered and confirmed your password!");
		form.password.focus();
		return false;
	}

	
	return true;
}


function checkLogin(form)
{



	if(form.username.value == "") {
		alert("Error: Username cannot be blank!");
		form.username.focus();
		return false;
	}

	if(form.password.value == "") {
		alert("Error: Password cannot be blank!");
		form.password.focus();
		return false;
	}


	console.log();
	
	return true;
}


function toggleSignup(e)
{
	e.preventDefault();

	$('#loginForm').toggle();
	$('#signupForm').toggle();

	var elem = document.getElementById("toggleClick");
	if (elem.value=="Sign Up Instead")
	{
		elem.value = "Login Instead";

	}
	else
	{
		elem.value = "Sign Up Instead";
	}
//var text = $('#toggleBtn').find("button");
//console.log(text);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
 function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();


	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);

	$.get("/project/"+idNumber, addDetails);



}

function addDetails(result)
{
	var projectHTML = '<a href="#">' +
	'<img src="' + result['image'] + '" class="detailsImage">' + 
	'<p>' + result['title'] + '</p>' +
	'<p><small>' + result['date'] + '<br>' + result['summary'] + '</small></p></a>';

	var id = result['id'];

	$("#project" + id +" .details").html(projectHTML);
}

/*
 * Make an AJAX call to retrieve a color palette for the site
 * and apply it
 */
 function randomizeColors(e) {
 	e.preventDefault();



 	$.get("/palette", applyPalette);

 }

 function applyPalette(result)
 {
 	var colors = result['colors']['hex'];

 	$("body").css("color", colors[1]);
 	$("body").css("background-color", colors[0]);
 }