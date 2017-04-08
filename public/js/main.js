// $('.description-card-first').transition();
$(document).ready(function() {
	// $('.jiggle.images .image')
	//   .transition({
	//     animation : 'jiggle',
	//     duration  : 800,
	//     interval  : 200
	//   });
	


	$('.first').hover(function(){
		$('.description-card-first').transition();
	});

	$('.second').hover(function(){
		$('.description-card-second').transition();
	});

	$('.third').hover(function(){
		$('.description-card-third').transition();
	});

});