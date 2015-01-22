(function() {

  var bunnyMove = function() {

    var bunnyMove = function(position, dimensionLength) {
       position = position + Math.floor(Math.random()*3 - 1);
       if (position<0)
       {
         position=1;
       }
       else if (position == dimensionLength)
       {
        position = position-2;
       }
       return position;
    };

    return {
      bunnyMove: bunnyMove,
    };
  };

  var module = angular.module("bunnySim")
  module.factory("bunnyMove", bunnyMove);
}());

