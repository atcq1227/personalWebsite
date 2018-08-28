$(document).ready(function() {
	var currentDiv = 'index';

	// $('div').each(function(i, ele) {
	// 	console.log(ele);
 //        if($(ele).attr('class') != 'index' || $(ele).attr('class') != 'textbox') {
 //        	$(ele).css("display", "none");
 //        }
 //    });

	$("a.triggerButton").click(function(e) {
		var nextDiv = this.id;

		if(nextDiv != currentDiv) {

		    $(document.getElementsByClassName(currentDiv)).fadeOut('fast', function() {
		    	$("div." + nextDiv + " div:first-child").css("display", "block");
		        $(document.getElementsByClassName(currentDiv)).replaceWith(document.getElementsByClassName(nextDiv)).fadeIn('slow');
		    });

		}

		currentDiv = nextDiv;
	});
});