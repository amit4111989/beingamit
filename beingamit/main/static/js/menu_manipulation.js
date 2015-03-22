var hidden=false;
	for (var i=1; i<4; i++) {

	$('.section'+ i ).click(function(){

		if(!hidden) {
		$('.chapter'+ i +'.menuRow').hide();
		hidden = true; 
		}

		else {
		hidden = false;
		$('.chapter'+ i +'.menuRow').show();
		}

	});

	}