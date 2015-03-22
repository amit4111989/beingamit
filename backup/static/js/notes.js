var d = new Date();

var takeNote = false,
 course = $('.header').text(),
 sectionName = $('.sectionName').text(),
 section = sectionName.replace(/\s/g, '');
 chapterName = $('#contentHeader').text(),
 chapter = chapterName.replace(/\s/g, '');
 day = d.getDate(),
 copy = true,
 month = d.getMonth(),
 year = d.getFullYear();

$('.menuImg.seclude.takeNotes').click(function(){

  takeNote = true;

  $('#titleWrapper').animate({top: '-500px'},{
                duration: distract_animation_duration,
                easing: 'swing',
                queue: false 
                });
  setTimeout(function() {
      $('#titleWrapper').css('display', 'none');
      }, distract_animation_duration);
  
  $('#notesPage').css('display', 'block').css('height', $('#content').height());

  $('#notesPage').animate({opacity: 1},{
                duration: distract_animation_duration,
                easing: 'swing',
                queue: false 
                });

  $('#contentWrapper').removeClass('mgauto');
  $('#contentWrapper').css('margin-left', '30px').css('float', 'left');

  $('#contentWrapper').css('width', '827px');

  $('#content, #footerWrapper, #footerWrapper2').animate({width: '95%'},{
                duration: distract_animation_duration,
                easing: 'swing',
                queue: false 
                });

  $('#menuBar').animate({opacity: 0},{
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

});

$('.close').click(function(){

  takeNote = false;

  $('#titleWrapper').animate({top: ''},{
                duration: distract_animation_duration,
                easing: 'swing',
                queue: false 
                });

  $('#titleWrapper').css('display', 'block');
      
  
  $('#notesPage').css('display', 'none');

  $('#notesPage').animate({opacity: 0},{
                duration: distract_animation_duration,
                easing: 'swing',
                queue: false 
                });

  $('#contentWrapper').addClass('mgauto');
  $('#contentWrapper').css('margin-left', '').css('float', '');

  $('#contentWrapper').css('width', '940px');

  $('#content, #footerWrapper, #footerWrapper2').animate({width: '85%'},{
                duration: distract_animation_duration,
                easing: 'swing',
                queue: false 
                });

  $('#menuBar').animate({opacity: 1},{
                duration: distract_animation_duration,
                easing: 'swing',
                queue: false 
                });

  $('#menuBar').css('display', 'block');
    

  $('#verticalDiv').animate({bottom: ''},{
                duration: distract_animation_duration,
                easing: 'swing',
                queue: false 
                });

  $('#verticalDiv').css('display', 'block');
});

 function checkForm() {
          var content = $('#contentNote').html();
          var str = '"'+ content +'"'
          $('#inp').attr('value', content);
          return false;
  };


  if(!window.noteVar){
    noteVar = {};
  }

  noteVar.Selector = {};
  noteVar.Selector.getSelected = function(){
    var result = '';
    if(window.getSelection && copy){
      result = window.getSelection();
    }else if(document.getSelection && copy){
      result = document.getSelection();
    }else if(document.selection && copy){
      result = document.selection.createRange().text;
    }
    return result;
  }

  noteVar.Selector.mouseup = function(){
    if(takeNote) {
      var str = noteVar.Selector.getSelected();
      if(str!=''){
        $('#contentNote').text( $('#contentNote').text() + "\n\n\u2022 " + str);
      }
    }
  }

  $(document).ready(function(){
    $(document).bind("mouseup", noteVar.Selector.mouseup);
  });


  // Initializing the textarea
  $('#contentNote').text(day+"/"+month+"/"+year + "\n\n" + course + "\n\n" + section + "\n\n" + chapter );

var setCopy = function(){
  copy = true;
  }

var resetCopy = function(){
  copy = false;
  }


