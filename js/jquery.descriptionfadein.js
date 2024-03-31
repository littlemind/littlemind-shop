$(function() {
		
	showDescription = function() {
		var info = $("div.info") 
		info.find("a.buttons").on("click", function( event ) { 
			if (info.hasClass("description")) {
				$("div.info div#description").fadeOut("fast");
			}
			else {
				$("div.info div#description").delay(600).fadeIn();
			}	
			info.toggleClass("description");
			return false;
		});
	};
		
	showDescription()
});
