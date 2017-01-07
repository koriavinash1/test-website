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
		$scope.location = $scope.area.toString() + $scope.city.toString() + $scope.country.toString();
		$('#pac-input').attr('value',location);
	};
});
