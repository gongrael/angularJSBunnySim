(function(){
  
   var app = angular.module("bunnySim", ["ngRoute"]);
   
   app.config(function($routeProvider){
     $routeProvider
      .when("/main", {
        templateUrl: "main.html",
        controller: "MainController"
      })
      .when("/bunny/:width/:height", {
        templateUrl: "bunny.html",
        controller: "BunnyController"
      })
      .otherwise({redirectTo:"/main"})
 
   });
 
}());