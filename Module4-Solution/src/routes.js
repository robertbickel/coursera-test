(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // List of Categories page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/categories.template.html',
    controller: 'CategoriesController as mainList',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/items/{categoryShortName}',
    templateUrl: 'src/menuapp/templates/items.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve: {
  //     items: ['MenuDataService', function (MenuDataService) {
  //       return MenuDataService.getItemsForCategory(categoryShortName);
  //     }]
  //   }
  // });
      items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              console.log("test",$stateParams.categoryShortName);
              return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
                .then(function (items) {
                  return items;
                });
            }]
    }
  });


  // .state('items', {
  //   url: '/items/{categoryShortName}',
  //   templateUrl: 'src/menuapp/templates/items.template.html',
  //   controller: 'ItemDetailController as itemDetail',
  //   resolve: {
  //     item: ['$stateParams', 'MenuDataService',
  //           function ($stateParams, MenuDataService) {
  //             console.log("test",$stateParams);
  //             return MenuDataService.getItemsForCategory()
  //               .then(function (items) {
  //                 return items[$stateParams.categoryShortName];
  //               });
  //           }]
  //   }
  // });


}

})();
