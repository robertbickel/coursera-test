(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$scope', '$timeout', 'SignUpService', 'MenuService'];
function SignUpController($scope, $timeout, SignUpService, MenuService) {

  var ctrl = this;

//   ctrl.go = function () {
//   MenuService.getMenuItemByShortName($ctrl.favoriteDishShortNumber).then(function (response) {
//   if (response.length > 0) {
//   UserService.RegisterUser({
//   firstName: $ctrl.firstName,
//   lastName: $ctrl.lastName,
//   email: $ctrl.email,
//   phone: $ctrl.phone,
//   favoriteDish: response[0]
//   }).then(function (t) {
//   $ctrl.messageClass = "alert alert-success";
//   $ctrl.message = "Your information has been saved!";
// });
//  } else {
// $ctrl.messageClass = "alert alert-warning";
// $ctrl.message = "No such menu number exists!";
// }
//  });
// }
// }
//



  ctrl.go = function () {
  //if(isValidMenuItem()){
   SignUpService.registerUser(ctrl.user);
   console.log("registered user!");
   ctrl.isRegistered = true;
  //}
}

 ctrl.isValidMenuItem = function(){
   //$scope.dishDoesntExist = true;
ctrl.dishDoesntExist = true;

   if(!ctrl.user.favouriteDish){
     //$scope.signUpForm.favouriteDish.$invalid = true;
     ctrl.dishDoesntExist = true;
     return false;
   }

   MenuService.isValidMenuItem(ctrl.user.favouriteDish).then(function (valid) {

    if(valid){
     $timeout(function () {
       //$scope.signUpForm.favouriteDish.$invalid = false;
       //$scope.dishDoesntExist = false;
       ctrl.dishDoesntExist = false;
     });
   }else {
     $timeout(function () {
       //$scope.signUpForm.favouriteDish.$invalid = true;
       //$scope.dishDoesntExist = true;
       ctrl.dishDoesntExist = true;

    });
  }
})

}

}
//   ctrl.isValidDish = function(){
//     $scope.dishDoesntExist = true;
//     console.log("test");
//     if(!ctrl.user.favouriteDish){
//       return false;
//     }
//
//      MenuService.isValidMenuItem(ctrl.user.favouriteDish).then(function (valid) {
//       if(valid){
//         $timeout(function () {
//           $scope.signUpForm.favouriteDish.$invalid = false;
//           $scope.dishDoesntExist = false;
//         });
//       }else {
//         $timeout(function () {
//           $scope.signUpForm.favouriteDish.$invalid = true;
//        });
//      }
//    })
//   }
// }

})();
