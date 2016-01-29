'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("See you next time!");
		$("#testjs").text("Loging out");
		$(".jumbotron p").toggleClass("active");
		$("#submitBtn").click(updateProject); 
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}

function projectClick(e){
	//console.log("Project clicked")
	e.preventDefault();

	var projectTile = $(this).find("p").text();
	var jumbotronHeader = $(".jumbotron h1");
	console.log("number" + jumbotronHeader.length);
	jumbotronHeader.text(projectTile);
	//$(this).css("background-color", "#7fff00");

	/*var containingProject = $(this).closest(".project");
    containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
	*/

	var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }
}

function updateProject(e) {
   var projectID = $('#project').val();
   $(projectID).animate({
      width: $('#width').val()
   });

   var newText = $('#description').val();
   $(projectID + " .project-description").text(newText);
}
