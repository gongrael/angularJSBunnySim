(function() {

  var bushGrow = function() {

    var bushGrow = function(rate, bunnyPos, indexSize) {
      if (Math.random()*100<rate) {

         var index = Math.floor(Math.random()*indexSize);

         if (bunnyPos == index && index > 0) {
           index = index - 1;
         }

         else if (bunnyPos == index && index == 0) {
           index = 1;
         }

         else if (bunnyPos == index && index == indexSize-1) {
            index = index - 1;
         }
        return index;
      }
      else return -1;
    };

    return {
      bushGrow: bushGrow,
    };
  };

  var module = angular.module("bunnySim")
  module.factory("bushGrow", bushGrow);
}());

