(function () {
"use strict";

angular.module('public')
.controller('UserController', UserController);

UserController.$inject = ['user', 'MenuService'];
function UserController(user, MenuService) {

  var ctrl = this;
  ctrl.user = user;

  MenuService.getItemByShortName(user.favouriteDish).then(function(response){
    ctrl.menuItem = response.data; 
  })

}

})();
