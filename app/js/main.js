var mtapp = angular.module('mtApp',[]);
mtapp.service('randomiser', function() {
    this.randomise = function (x) {
        return x.toString(16);
    }
});
mtapp.controller('mainCtrl', function($scope,$timeout, randomiser){
	$scope.boxArray=[
		{"id":1,"colour":"yellow"},
		{"id":2,"colour":"red"},
		{"id":3,"colour":"blue"},
		{"id":4,"colour":"green"}];
	$scope.orderArray=[1,2,3,4];
	$scope.orderAttemptArray=[];
	$scope.flash = function(item) {
		var position = $scope.orderAttemptArray.push(item.id) - 1;
		if($scope.orderAttemptArray[position] === $scope.orderArray[position]){
			item.flashed = !item.flashed;
			$timeout(function(){
				item.flashed = !item.flashed;
			},1000,true);
		}
		console.log($scope.orderAttemptArray, 'is trying to be', $scope.orderArray)
	}
});