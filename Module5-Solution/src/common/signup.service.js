(function () {
"use strict";

angular.module('common')
.service('SignUpService', SignUpService);

SignUpService.$inject = [];
function SignUpService() {
  var service = this;

  var user = {};

  service.registerUser = function (userDetails) {
  user = userDetails;
  }

  service.displayUser = function (){
    return user;
  }

}



})();
