(function(){

	var app = angular.module ("bunnySim");

	var BunnyController = function($scope, $interval, $log, randomNumb, $routeParams){

    	var decrementCountDown = function(){
    		$scope.countDown -= 1;
        }

    	//function that when invoked starts the simulation.. to stop the function early set %scope.countDown to 0.
    	var startSim = function() {
    		$interval(decrementCountDown, 100, $scope.countDown)
    	}
        

        var bunnyBuilder = function() {
        }


        function field(width,height){
            var tempArr = []
            for(j=0; j<height; j++) {
                for(k=0; k<width; k++) {
                    var tempObj = {"x":k, "y":j, "class":"grass", "size":20};
                    tempArr.push(tempObj);
                }
            }
            return tempArr;
        }

        
             
        //routeParams takes the variables from the url, use variables as defined in app.js
        $scope.width = $routeParams.width;
        $scope.height= $routeParams.height;


    	$scope.countDown = 10000;
    	$scope.bunnyEnergy = 1000;
        $scope.regeneration = 20; 
        $scope.grow = "false";
        $scope.fieldArray = field($scope.width, $scope.height);
    	//start the simulation
    	startSim();
    }
	
	app.controller("BunnyController", BunnyController);

}());