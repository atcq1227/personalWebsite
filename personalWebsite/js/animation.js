$(document).ready(function() {
	var currentDiv = 'index';

	$("div.index").fadeIn('fast');

	$("a.triggerButton").click(function(e) {
		var nextDiv = this.id;

		if(nextDiv != currentDiv) {

		    $(document.getElementsByClassName(currentDiv)).fadeOut('fast', function() {
		    	//$("div." + nextDiv + " div:first-child").css("display", "block");
		    	$("div." + nextDiv + " div:first-child").fadeIn('slow');
		        $(document.getElementsByClassName(currentDiv)).replaceWith(document.getElementsByClassName(nextDiv)).fadeIn('slow');
		    });

		}

		currentDiv = nextDiv;
	});
});