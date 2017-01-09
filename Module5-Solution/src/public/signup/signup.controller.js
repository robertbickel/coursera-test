(function () {
  "use strict";

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['$scope', '$timeout', 'SignUpService', 'MenuService'];
  function SignUpController($scope, $timeout, SignUpService, MenuService) {

    var ctrl = this;
    ctrl.dishDoesntExist = true;

    ctrl.go = function () {
      SignUpService.registerUser(ctrl.user);
      console.log("registered user!");
      ctrl.isRegistered = true;
    }

    ctrl.isValidMenuItem = function(){
      ctrl.dishDoesntExist = true;
      if(!ctrl.user.favouriteDish){

        //No favourite dish specified
       ctrl.dishDoesntExist = true;
       return false;
     }

     MenuService.isValidMenuItem(ctrl.user.favouriteDish).then(function (valid) {
      if(valid){
        $timeout(function () {
         ctrl.dishDoesntExist = false;
        });
      }else {
        $timeout(function () {
        ctrl.dishDoesntExist = true;
      });
    }
  })

  }

}

})();
