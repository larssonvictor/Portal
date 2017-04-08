// $('.description-card-first').transition();
$(document).ready(function() {
	$('.icon-container')
	  .transition({
	    animation : 'fade up',
	    duration  : 2000,
	    interval  : 200
	  });
	
	$('.page-title').transition();

	$('.first').hover(function(){
		$('.description-card-first').transition({
			duration: 500
		});
	});

	$('.second').hover(function(){
		$('.description-card-second').transition();
	});

	$('.third').hover(function(){
		$('.description-card-third').transition();
	});

});

function fadeInTitle() {
	
}