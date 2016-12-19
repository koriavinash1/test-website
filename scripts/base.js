var general_app = angular.module('anveshak',[]);
general_app.config(['$httpProvider','$interpolateProvider',function($httpProvider,$interpolateProvider){
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
}]);
general_app.controller("base", function($scope,$http) {
	$scope.flag=1;$scope.option=1;
	console.log($scope.option);
	$scope.height = window.innerHeight;
	$scope.teamMembers = [
							[
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'},
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'},
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'},
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'},
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'},
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'},
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'},
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'},
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'},
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'},
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'},
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'}

							],
							[
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'},
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'},
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'},
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'},
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'},
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'},
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'},
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'},
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'},
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'},
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'},
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'}

							],
							[
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'},
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'},
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'},
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'},
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'},
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'},
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'},
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'},
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'},
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'},
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'},
								{'name':'name', 'module':'module', 'description':'description', 'flink':'flink', 'tlink':'tlink', 'glink':'glink'}

								]
						];
});
