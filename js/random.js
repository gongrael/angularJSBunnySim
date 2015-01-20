(function() {

  var randomNumb = function() {

    var randomNumb = function(max) {
      var randomNumb = Math.random()*max;
      return randomNumb;
    };

    return {
      randomNumb: randomNumb,
    };
  };

  var module = angular.module("bunnySim")
  module.factory("randomNumb", randomNumb);
}());