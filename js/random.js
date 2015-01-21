(function() {

  var randomNumb = function() {

    var randomNumb = function(max) {
      var randomNumb = Math.random()*max;
      return Math.floor(randomNumb);
    };

    return {
      randomNumb: randomNumb,
    };
  };

  var module = angular.module("bunnySim")
  module.factory("randomNumb", randomNumb);
}());