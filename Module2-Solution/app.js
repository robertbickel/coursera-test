(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

function  LunchCheckController($scope) {

  LunchCheckController.$inject = ['$scope'];
  $scope.userentry = "";
  $scope.resultMessage = "";
  $scope.totalValue = 0;

  $scope.CountNumberOfItems = function () {
    if(isEmpty($scope.userentry)){
      $scope.resultMessage = "Please enter data first"
    }else{
      var totalNumberOfItems = CountIndividualEntries($scope.userentry);
      $scope.totalValue = totalNumberOfItems;
      if($scope.totalValue == 0){
        $scope.resultMessage = "Please enter data first"
      }else{
        if($scope.totalValue <= 3){
          $scope.resultMessage = "Enjoy!";
        }else{
          $scope.resultMessage = "Too Much!";
        }
      }
    }
  };
}

function CountIndividualEntries(rawString){
    var arrayOfEntries = rawString.split(',');
    var totalEntries = 0;
    for (var i = 0; i < arrayOfEntries.length; i++) {
      if(!isEmpty(arrayOfEntries[i])){totalEntries++};
    }
    console.log(totalEntries);
  return totalEntries;
}

function isEmpty(string) {
    return (string.length === 0 || !string.trim());
};

})();
