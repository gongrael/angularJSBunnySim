(function(){

	var app = angular.module ("bunnySim");

	var BunnyController = function($scope, $interval, $log, randomNumb, $routeParams, bunnyMove, bushGrow){

    	var bunnyTurn = function(){

            //function returns an index number for where the new bush will go if it grew, returns null if it doesn't
            //needs to accept a series of variables
            // @ regeneration rate
            // @ current position index for bunny
            // @ field size as fieldArray.length
            $scope.bushIndex = bushGrow.bushGrow($scope.regeneration, $scope.bunnyProps.index, $scope.fieldArray.length);         

            if ($scope.bushIndex+1) {
               $scope.fieldArray[$scope.bushIndex].class = "#bush";
            }

            $scope.fieldArray[$scope.bunnyProps.index].class = "#grass"; 

            //returns new x and y positions for bunny
            $scope.bunnyProps.x = bunnyMove.bunnyMove($scope.bunnyProps.x, $scope.width);
            $scope.bunnyProps.y = bunnyMove.bunnyMove($scope.bunnyProps.y, $scope.height);

            $scope.bunnyProps.index = $scope.width * $scope.bunnyProps.y + $scope.bunnyProps.x;

            if ($scope.fieldArray[$scope.bunnyProps.index].class == "#bush") {
                $scope.bunnyProps.energy = $scope.bunnyProps.energy + 10;
                $scope.fieldArray[$scope.bunnyProps.index].class = "#bunny";
            }
            else {
                $scope.fieldArray[$scope.bunnyProps.index].class = "#bunny";
            }

    		$scope.countDown -= 1;
            $scope.bunnyProps.energy -=1; 

            if ($scope.bunnyProps.energy===0){
                $interval.cancel(stopInterval);
                $scope.dies = true;
            }                 
            else if ($scope.countDown == 0)
            {
                $interval.cancel(stopInterval);
                $scope.lives = true;
            }
        }

    	//function that when invoked starts the simulation.. to stop the function early set %scope.countDown to 0.
    	
    
        
        var bunnyInitialize = function(){
            $scope.bunnyProps = {"x":randomNumb.randomNumb($scope.width), "y": randomNumb.randomNumb($scope.height), "energy":1000};
            $scope.bunnyProps.index = $scope.width * $scope.bunnyProps.y + $scope.bunnyProps.x;
            $scope.fieldArray[$scope.bunnyProps.index].class="#bunny";        
        }


        function field(width,height){
            var tempArr = []
            for(j=0; j<height; j++) {
                for(k=0; k<width; k++) {
                    var tempObj = {"x":k, "y":j, "class":"#grass", "size":20};
                    tempArr.push(tempObj);
                }
            }
            return tempArr;
        }

         var startSim = function(speed) {
            stopInterval = $interval(bunnyTurn, speed);
        }

         $scope.simSpeedControl = function(speed) {
            $interval.cancel(stopInterval);
            stopInterval = $interval(bunnyTurn, speed);
         }
             
        //routeParams takes the variables from the url, use variables as defined in app.js
        $scope.width = $routeParams.width;
        $scope.height= $routeParams.height;
    	$scope.countDown = 1000;
        $scope.regeneration = 20; 
        $scope.lives = false;
        $scope.dies = false;
        $scope.simSpeed = 1000;
    	//start the simulation
       
        $scope.fieldArray = field($scope.width, $scope.height);
        bunnyInitialize();
    	startSim($scope.simSpeed);
    }
	
	app.controller("BunnyController", BunnyController);

}());