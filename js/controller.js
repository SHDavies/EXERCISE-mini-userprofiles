var app = angular.module('userProfiles');
app.controller('mainCtrl', function($scope, mainSrvc) {
	$scope.users = mainSrvc.getUsers();

})