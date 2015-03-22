var menu_animation_duration = 1000,
width = $(document).width(),
height = $(document).height(),
modal_animation_duration = 500,
distract_animation_duration = 1000;

$('#modal-background').css('width', width + 'px')
					  .css('height', height + 'px');

$('#distract-background').css('width', width + 'px')
					  .css('height', height + 'px');


$('.menuImg').mouseenter(function(){

	$('.menuImg').css('opacity', '0.6');

	$(this).css('opacity', '1')
		   .animate({
				'margin-left' : '15%'}, {
				duration: menu_animation_duration,
				easing: "swing",
				queue: false
				});

         }).

	mouseleave(function(){
	$('.menuImg').css('opacity', '1');

	$(this).animate({ 
		    	'margin-left' : ''}, {
				duration: menu_animation_duration,
				easing: "swing",
				queue: false
				});
		 });

$('.menuImg.include').click(function(e){
	e.stopPropagation();

	$('#modal-background').css('z-index', '2');

	$('#menuBar').css('z-index', '3');

	$('#modal-background').css('display', 'block')
						  .animate({opacity: 0.9}, {
						  duration: modal_animation_duration,
						  easing: 'linear',
						  queue: false});
	$('#slideMenu').animate({ left : '-350px'}, {duration: 500, queue: false, easing: 'linear'});  
	$('#slideMenu').css('position', 'fixed');
});

$('body').click(function(e){

	$('#menuBar').css('z-index', '');

	$('#modal-background').animate({opacity: 0, 'z-index': 0}, {
						  duration: modal_animation_duration,
						  easing: 'linear',
						  queue: false});
	setTimeout(function() {
			$('#modal-background').css('display', 'none');
			}, modal_animation_duration);

	$('#slideMenu').animate({ left : '-1300px'}, {duration: modal_animation_duration, queue: false, easing: 'linear'}); 
	 setTimeout(function(){
    $('#slideMenu').css('position', 'absolute');
  }, 500);

});

$('#slideMenu').click (function(e){
  e.stopPropagation();
  return false;
})

$('.menuImg.seclude.distracted').click(function(){

	$('#goBack').css('display', 'block');

	 jQuery("body").animate({
     	 backgroundColor: "#3B2E2A"
 	 },
 	 {
		duration: distract_animation_duration,
		easing: 'swing',
		queue: false 
	});

	  jQuery("#contentHeader").animate({
     	 color: "#fff"
 	 }, 1000 );

	  jQuery("#actualContent").animate({
     	 color: "#fcfcfc"
 	 }, 1000 );

	$('#titleWrapper').animate({top: '-500px'},{
								duration: distract_animation_duration,
								easing: 'swing',
								queue: false 
								});
	setTimeout(function() {
			$('#titleWrapper').css('display', 'block');
			}, distract_animation_duration);

	$('#content').animate({width: '100%', top: '-200px'},{
								duration: distract_animation_duration,
								easing: 'swing',
								queue: false 
								});

	$('#menuBar').animate({right: '-500px'},{
								duration: distract_animation_duration,
								easing: 'swing',
								queue: false 
								});
	setTimeout(function() {
			$('#menuBar').css('display', 'none');
			}, distract_animation_duration);

	$('#verticalDiv').animate({bottom: '-1500px'},{
								duration: distract_animation_duration,
								easing: 'swing',
								queue: false 
								});
	setTimeout(function() {
			$('#verticalDiv').css('display', 'none');
			}, distract_animation_duration);

	$('#footerDiv').animate({left: '-1500px'},{
								duration: distract_animation_duration,
								easing: 'swing',
								queue: false 
								});
	setTimeout(function() {
			$('#footerDiv').css('display', 'none');
			}, distract_animation_duration);

});

$('#goBack').click(function(){

	$('#goBack').css('display', 'none');

	 jQuery("body").animate({
     	 backgroundColor: "#efe9e1"
 	 },
 	 {
		duration: distract_animation_duration,
		easing: 'swing',
		queue: false 
	});


	  jQuery("#contentHeader").animate({
     	 color: "#726e6b"
 	 }, 1000 );

	  jQuery("#actualContent").animate({
     	 color: "#000"
 	 }, 1000 );

	$('#titleWrapper').animate({top: ''},{
								duration: distract_animation_duration,
								easing: 'swing',
								queue: false 
								});

	$('#content').animate({width: '85%', top: ''},{
								duration: distract_animation_duration,
								easing: 'swing',
								queue: false 
								});
	$('#menuBar').css('display', 'block');
	$('#menuBar').animate({right: '0px'},{
								duration: distract_animation_duration,
								easing: 'swing',
								queue: false 
								});


	$('#verticalDiv').css('display', 'block');
	$('#verticalDiv').animate({bottom: ''},{
								duration: distract_animation_duration,
								easing: 'swing',
								queue: false 
								});




	$('#footerDiv').css('display', 'block');
	$('#footerDiv').animate({left: ''},{
								duration: distract_animation_duration,
								easing: 'swing',
								queue: false 
								});


});

