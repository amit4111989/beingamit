<html ng-app="portfolio">
<head>

<?php 
$chapterName = $_GET['chapterName'];
$sectionName = $_GET['sectionName'];
$chapterId = $_GET['chapterId'];
$course = $_GET['course'];
$uploadDate = $_GET['date'];
?>

	<title><?php echo $course; ?> - <?php echo $sectionName; ?> - <?php echo $chapterName; ?></title>
	<link rel="stylesheet" type="text/css" href="css/page.css">
	<link rel="stylesheet" type="text/css" href="css/slideMenu.css"> 
	<script src = "angular/angular.js"></script>
	<script src= "js/app.js"></script>
	<script src= "js/controller.js"></script>
	<script type="text/javascript" src="base64.js"></script>
	<script type="text/javascript" src="sprintf.js"></script>
	<script type="text/javascript" src="js/jspdf/jspdf.js"></script>
</head>
<body ng-controller="main">
	<div id="slideMenu">
		<div ng-view>
		</div>
	</div>
	<div id="goBack"></div>
	<div id="modal-background"></div>

	<div id="titleWrapper">
		<div id="texture" class="mgauto">
			<center>
				<div id="titleBoxBack"></div>
				<div id="titleBoxMiddle"></div>
				<div id="titleBoxMain">
					<header class="header"><?php echo $course ;?></header>
				</div>
			</center>
		</div>
		<div id="horizontalDivTop" class="mgauto"></div>
		<div id="dateWrapper" class="mgauto">
			<article id="date">
				<span style="color: red;" class="sectionName"> <?php echo $sectionName;?> </span> &nbsp; &psi; &nbsp; <span style="color: red;"> <?php echo $uploadDate;?> </span>
			</article>
		</div>
		<div id="horizontalDivBottom" class="mgauto"></div>
	</div>
	<div id="contentWrapper" class="mgauto">

		<div id="content">

			<header id="contentHeader">
				&ldquo;<?php echo $chapterName;?>&rdquo;
			</header>
			<article id="actualContent">
				<?php include 'php/article.php'; ?>
			</article>
		</div>

		<div id="verticalDiv"></div>
		<nav id="menuBar">
		
			<a class="menuImg include" href="#/menu" ng-click="menuClk('CSS')"> <article class="menuTxt"> CSS </article> </a>
			<a class="menuImg include" href="#/menu" ng-click="menuClk('HTML')"> <article class="menuTxt"> HTML </article> </a>
			<a class="menuImg include" href="#/menu" ng-click="menuClk('Javascript')"> <article class="menuTxt"> JS </article> </a>
			<a class="menuImg include" href="#/menu" ng-click="menuClk('Data Visualization')"> <article class="menuTxt specialText"> Data Visualization </article> </a>
			<a class="menuImg" href="http://beingamit.com/index.html"> <article class="menuTxt"> Home </article> </a>
			<a class="menuImg seclude distracted" href="" > <article class="menuTxt specialText2"> <span style="color:red;"> Distracted? </span> </article> </a>
			<a class="menuImg seclude takeNotes" href="" > <article class="menuTxt specialText2"> <span style="color:red;"> Take Notes </span> </article> </a>
		</nav>

		<div id="footerWrapper">
			<!-- Social network apis to share the article -->
		</div>

		<div id="footerWrapper2">
			<!-- Social network apis to share the article -->
		</div>
		<div id="footerSpace"></div>
	</div>

	<div id="notesPage">
		<svg class="close">
			<g>
			 <circle cx="20" cy="20" r="10" stroke="black"
  			 stroke-width="2" fill="red"/>
  			 <text dx="15" dy="26" id="closeX">X</text>
  			</g>
		</svg>
		<textarea id='contentNote' onfocus="resetCopy()" onblur="setCopy()">
		</textarea>
		<div id="text-options"> </div>
	</div>

	<script src= "js/jquery-1.8.0.min.js"></script>
	<script src= "js/jquery.easing.1.3.js"></script>
	<script src="js/jquery.color-2.1.2.min.js"></script>
	<script src= "js/notes.js"></script>
	<script type="application/ecmascript" async="" src="https://raw.github.com/eligrey/FileSaver.js/master/FileSaver.js"></script>
	<script src= "js/saveNote.js"></script>
	<script type="text/javascript" src="js/pageLayout.js"></script>
</body>
</html>