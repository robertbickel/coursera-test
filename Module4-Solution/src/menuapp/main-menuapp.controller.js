(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuAppController', MenuAppController);


MenuAppController.$inject = ['categories'];
function MenuAppController(categories) {
  var mainList = this;
  mainList.categories = categories;
}

})();
