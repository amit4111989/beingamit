angular.module('portfolio', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/menu', {templateUrl: '_slideMenu.html',   controller: main}).
      when('/takeNotes', {templateUrl: '_notePage.php',   controller: main});
}]);