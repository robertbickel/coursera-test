(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['categories'];
function CategoriesController(categories) {
  var mainList = this;

  //console.log("test");
  // mainList.$onInit = function () {
  //   MenuDataService.getAllCategories()
  //   .then(function (result) {
  //     mainList.categories = result;
  //   });
  // };
  mainList.categories = categories;
}

})();
