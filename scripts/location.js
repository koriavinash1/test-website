var general_app = angular.module('masterstroke',[]);
general_app.config(['$httpProvider','$interpolateProvider',function($httpProvider,$interpolateProvider){
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
}]);
general_app.controller("map", function($scope,$http) {
	$scope.height = window.innerHeight;
	$scope.search = function(){
		console.log($scope.height);
		console.log($scope.area);
		console.log($scope.city);
		console.log($scope.country);
		var location = $scope.area.toString() + ", "+ $scope.city.toString() +", "+ $scope.country.toString();
    setcookie("location", location, 15);
    console.log("hello");
	};
});

function setcookie(name, value, days)
{
  if (days)
  {
    var date = new Date();
    date.setTime(date.getTime()+days*24*60*60*1000); // ) removed
    var expires = "; expires=" + date.toGMTString(); // + added
  }
  else
    var expires = "";
  document.cookie = name+"=" + value + expires + ";path=/"; // + and " added
}
