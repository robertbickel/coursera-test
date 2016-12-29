(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$q', '$timeout', '$http', 'ApiBasePath']
function MenuDataService($q, $timeout, $http, ApiBasePath) {
  var service = this;

  // List of shopping items
  var items = [];

  // Pre-populate a no cookie list
  items.push({
    name: "Sugar",
    quantity: "2 bags",
    description: "Sugar used for baking delicious umm... baked goods."
  });
  items.push({
    name: "flour",
    quantity: "1 bags",
    description: "High quality wheat flour. Mix it with water, sugar, 2 raw eggs."
  });
  items.push({
    name: "Chocolate Chips",
    quantity: "3 bags",
    description: "Put these in the dough. No reason, really. Gotta store them somewhere!"
  });

  // Simulates call to server
  // Returns a promise, NOT items array directly
  MenuSearchService.getMatchedMenuItems = function (searchTerm) {
     return $http({
       method: "GET",
       url: (ApiBasePath + "/menu_items.json"),
     }).then(function (result){
       var foundItems = result.data.menu_items;
       //console.log(foundItems);
       return narrrowItDown(foundItems, searchTerm);
     });
    };

  service.getAllCategories = function () {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
    }).then(function (result){
      var foundItems = result.data.menu_items;
      //console.log(foundItems);
      return narrrowItDown(foundItems, searchTerm);
    });
  };


 // getItemsForCategory(categoryShortName)
 // this method should return a promise which is a result of using the
 // $http  service, using the following REST API endpoint:
 // https://davids-restaurant.herokuapp.com/menu_items.json?category=, where,
 // before the call to the server, your code should append whatever
 // categoryShortName  value was passed in as an argument into the  getItemsForCategory  method.
 service.getAllCategories = function () {


 };


}

})();
