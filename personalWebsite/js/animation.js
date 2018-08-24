$(document).ready(function() {
	var currentDiv = 'index';

	$("a.triggerButton").click(function(e) {
		var nextDiv = this.id;

		$(document.getElementsByClassName(nextDiv)).css("display", "inline");

		console.log("current: " + currentDiv);
		console.log("next: " + nextDiv);

	    $(document.getElementsByClassName(currentDiv)).fadeOut('fast', function(){
	        $(document.getElementsByClassName(currentDiv)).replaceWith(document.getElementsByClassName(nextDiv)).fadeIn('slow');
	    });

	    $(document.getElementsByClassName(currentDiv)).css("display", "none");

	    currentDiv = nextDiv;

	    console.log(document.getElementsByClassName(currentDiv));
	});
});