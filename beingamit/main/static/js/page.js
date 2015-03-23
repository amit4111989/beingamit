$('#page_menu_wrapper svg#name').on('click',function() {
	window.location = 'http://localhost:8000'
});

$('#sidebar .menu_item.first').css('background','#FFF8C4');


$('#sidebar .menu_item').on('click',function(){
	$('#sidebar .menu_item').css('background','');
	$(this).css('background','#FFF8C4');
});

// Fixed scroll

$(function() {

    var $sidebar   = $("#sidebar"), 
    	$top = $("#sidebar .top_menu"),
    	$top_display = $("#sidebar .top_menu").css('display'), 
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 0;

    $window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
        	  
            $top.show();
            $sidebar.stop().animate({
                marginTop: $window.scrollTop() - offset.top + topPadding
            });
        } else {
        	
            $top.hide();
            $sidebar.stop().animate({
                marginTop: 0
            });
        }
    });
    
});

// Jump to link

$(".menu_item").on("click", function( e ) {

        e.preventDefault();

        $("body, html").animate({ 
            scrollTop: $( $(this).attr('href') ).offset().top 
        }, 600);

    });

// function to assign ratings

$(function() {

	$('.ratings').each(function(){
		console.log('here');
		var score = 5
		var full_stars = parseFloat($(this).val());
		var half_stars = full_stars-parseInt(full_stars);
		var empty_stars = score - Math.ceil(full_stars+half_stars);
		console.log(full_stars, half_stars, empty_stars);

		for(var i = 0; i<Math.floor(empty_stars);i++) {
			$(this).after('<span class="fa fa-star-o"> &nbsp;&nbsp;</span>')
		}

		if (Math.ceil(half_stars)>0) {
			console.log('repeat');
			$(this).after('<span class="fa fa-star-half-o"> &nbsp;&nbsp;</span>')

		}

		for(var i = 0; i<Math.floor(full_stars);i++) {
			$(this).after('<span class="fa fa-star"> &nbsp;&nbsp;</span>')
		}


	});
});