var width = $(document).width(),
	height = $(document).height(),
	modal_animation_duration = 500,
  about_animation_duration = 1000,
  hold_background = false,
  chapterOpen = false,
  cloud_text_click = false;

			
$('#modal-background').css('width', width + 'px')
					  .css('height', height + 'px');

$('#about-background').css('width', width + 'px')
            .css('height', height + 'px');


$('.option.include').mouseenter(function(){


  $('#modal-background').css('display', 'block')
					              .animate({opacity : 0.9, 'z-index' : '2'}, {
					              duration: modal_animation_duration,
                        easing: "linear",
                        queue: false});

  $('#modal-background').css('z-index', '2');


  if(!cloud_text_click) {
    $('#twitterWrapper').hide();
    $('#cloudWrapper').css('display', 'block');
    $('#cloudText').css('display', 'block');
  }



}).mouseleave(function(){

   $('#twitterWrapper').show();

  if(!hold_background) {
    $('#modal-background').animate({'opacity' : 0}, {
  					              duration: modal_animation_duration,
                          easing: "linear",
                          queue: false});
    $('#cloudWrapper').css('display', 'none');
  }

});


$('.option.include').click (function(e){
  e.stopPropagation();
  $('#slideMenu').animate({ left : '-550px'}, {duration: 500, queue: false, easing: 'linear'});  
  hold_background = true;
  $('#modal-background').css('display', 'block')
              .animate({opacity : 0.9, 'z-index' : '2'}, {
                 duration: modal_animation_duration,
                           easing: 'easeOutBounce',
                           queue: false});
  $('#cloudWrapper').css('display', 'none');
  cloud_text_click = true;
  $('#cloudText').css('display', 'none');
  
});

$('body').click (function(){

  $('#slideMenu').animate({ left : '-1550px'}, {duration: 500, queue: false, easing: 'linear'});  
  
  hold_background = false;
  $('#modal-background').animate({'z-index' : 0, 'opacity' : 0}, {
                        duration: modal_animation_duration,
                        easing: 'linear',
                        queue: false});

  cloud_text_click = false;
   $('#cloudWrapper').css('display', 'none');

});

$('#slideMenu').click (function(e){
  e.stopPropagation();
  return false;
})

// When you click about

$('#about').click(function(){
  $('#frame').css('z-index', '8');
  $('#paper').css('z-index', '8');
  $('#about-background').animate({opacity : 1}, {
                          duration: about_animation_duration,
                           easing: 'swing',
                           queue: false})
                        .css('display', 'block');

  $('#frame').animate({left : '250px'}, {
                          duration: about_animation_duration,
                           easing: 'swing',
                           queue: false})
                        .css('display', 'block');

  $('#paper').animate({right : '-1000px', display: 'none'}, {
                          duration: about_animation_duration,
                           easing: 'swing',
                           queue: false});

  $('#homeText').animate({width : '100%', bottom: '76px', left: '-36px', opacity: 1}, {
                          duration: about_animation_duration,
                           easing: 'swing',
                           queue: false});

  setTimeout(function(){$('#paper').css('display', 'none');}, 1000);
                        
});

$('#about_back').click(function(){
  $('#frame').css('z-index', '0');
  $('#paper').css('z-index', '');
  $('#about-background').animate({opacity : 0}, {
                          duration: 1500,
                           easing: 'swing',
                           queue: false});
  setTimeout(function(){$('#about-background').css('display', 'none');}, 1500);

  $('#frame').animate({left : '0px'}, {
                          duration: about_animation_duration,
                           easing: 'swing',
                           queue: false})
                        .css('display', 'block');

  $('#paper').animate({right : '-69px'}, {
                          duration: about_animation_duration,
                           easing: 'swing',
                           queue: false})
                        .css('display', 'block');

  $('#homeText').animate({width : '256px', bottom: '39px', left: '17px', opacity: 0}, {
                          duration: about_animation_duration,
                           easing: 'swing',
                           queue: false});
                        
});





