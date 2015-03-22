function main($scope, $http) {
  var hidden = true;
  var menu;
  var chapter_url;

  $scope.hoverFunction = function(cla) {

    //89 characters is the limit of tip

    if(cla=='css') {
      $scope.menuHover_text = "Cascading Style Sheets are used to format the layout of Web Pages";
    }

    if(cla=='html') {
      $scope.menuHover_text = "Hyper-Text Markup Language is the language webpages are written in";
    }

    if(cla=='js') {
      $scope.menuHover_text = "Programming language that can be integrated into HTML pages";
    }

    if(cla=='d3') {
      $scope.menuHover_text = "Pictorial representation of data in form of graphs via javascript, html and css";
    }

  };

  $scope.redirect = function(sname, cid, cname, course, date) {
    var queryStr = "sectionName="+ sname + "&" + "chapterId="+ cid + "&" + "chapterName="+ cname + "&" + "course="+ course + "&" +"date=" + date; 
    window.location.href = "http://beingamit.com/allpage.php?"+queryStr;
  }

  $scope.menuClk = function(men) {
    menu = men;
    $http.get('json/' + menu + '/'+ menu +'.json').success(function(data) {
    $scope.sections = data;
  });

  }

 $scope.clk = function (n, men) {

    if (chapter_url != 'json/' + men + '/section'+ n +'.json') {
      hidden = true;
    }

    chapter_url = 'json/' + men + '/section'+ n +'.json'
    $http.get(chapter_url).success(function(data) {
      $scope.chapters = data;
    });

    $('.sec #chapterWrapper').css('display','none');
      if(hidden) {
        $('.menuRow .caret').removeClass('arrow-down');
        $('.menuRow .caret').addClass('arrow-right');
        $('.section' +n+ ' #chapterWrapper' ).css('display', 'block');
        $('.section' + n + ' .caret').removeClass('arrow-right');
        $('.section' + n + ' .caret').addClass('arrow-down');
          hidden = false;
      }

      else {
        $('.section' +n+ ' #chapterWrapper' ).css('display', 'none');
        $('.section' + n + ' .caret').removeClass('arrow-down');
        $('.section' + n + ' .caret').addClass('arrow-right');
          hidden = true;
      }

}

}