(function(){

	var app = angular.module ("bunnySim");

	var MainController = function($scope, $interval, $log, randomNumb, $location){

        $scope.fieldSubmit = function(width,height){
            $location.path("/bunny/" + width + "/" + height);
        }

        $scope.width = 10;
        $scope.height = 10;
    }
	
	app.controller("MainController", MainController);

}());