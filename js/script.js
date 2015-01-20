(function(){

	var app = angular.module ("bunnySim", []);

	var MainController = function($scope, $interval, $log, randomNumb){

    	var decrementCountDown = function(){
    		$scope.countDown -= 1;

        function growGenerator() {
            if($scope.fieldArray[Math.floor(randomNumb.randomNumb(13))].class == "grass") 
            {
                $scope.fieldArray[Math.floor(randomNumb.randomNumb(13))].class = "bush";
            }
            // else 
            // {
            //     return growGenerator();
            // }
         }

            if (randomNumb.randomNumb(500) < $scope.regeneration){
                $scope.grow = "true";
                growGenerator();
            }
            else {
                $scope.grow = "false";
            }
    	}
    	//function that when invoked starts the simulation.. to stop the function early set %scope.countDown to 0.
    	var startSim = function() {
    		$interval(decrementCountDown, 100, $scope.countDown)
    	}
        //
        var bunnyBuilder = function() {
        }
        var vegeGrowe = function() {
        } 

        // $scope.fieldArray is a matrix, it is filled with matrices, and objects.
     
        // function fieldBuilder(){
        // 	var fieldArray = new Array();
        // 	var columns = new Array();
        // 	var index = 0;
        // 	for (var i=0; i<30; ++i) {
        // 	    for(var j=0; j<30; ++j) {
        // 			var tempObj = {"index": index, "class": "grass" };
        // 			columns.push(tempObj); 	
        // 			++index;
        // 		}
        // 		fieldArray.push(columns)
        // 		columns = [];
        // 	}
        // 	return fieldArray;
        // }

        function fieldBuilder(){
        	var fieldArray = new Array();
            var index = 0;
        	for (var i=0; i<13; ++i) {
        	     	var tempObj = {"index": index, "class": "grass" };
        			fieldArray.push(tempObj); 	
        			++index;
        		}
           	return fieldArray;
        }

    	$scope.fieldArray = fieldBuilder();

        //$log.log($scope.fieldArray);
    	// defines the countdown and the bunny energy in the scope.
    	$scope.countDown = 10000;
    	$scope.bunnyEnergy = 1000;
        $scope.regeneration = 20; 
        $scope.grow = "false";

    	//start the simulation
    	startSim();

	}
	app.controller("MainController", MainController);
}());