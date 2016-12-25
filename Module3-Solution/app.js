(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService);


//
//   menu.logMenuItems = function (shortName) {
//     var promise = MenuCategoriesService.getMenuForCategory(shortName);
//
//     promise.then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//   };
//
// }
//


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {

    var NarrowedDownList = this;
    var promise = MenuSearchService.getMatchedMenuItems();
    promise.then(function (response) {
      NarrowedDownList.foundItems = response.data;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });


  };

}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService() {
  var service = this;

  // List of shopping items
  // var itemsToBuy = [
  //   {
  //      name: "Milk",
  //      quantity: "2"
  //    },
  //    {
  //      name: "Eggs",
  //      quantity: "6"
  //    },
  //    {
  //      name: "Bread",
  //      quantity: "3"
  //    },
  //    {
  //      name: "Chocolate",
  //      quantity: "5"
  //    },
  //    {
  //      name: "Coffee",
  //      quantity: "5"
  //    }
  // ];
  // var itemsBought = [];
  //
  // service.removeItemToBuy = function (itemIndex) {
  //   var item = itemsToBuy[itemIndex];
  //   itemsBought.push(item);
  //   itemsToBuy.splice(itemIndex,1);
  //  };
  //

  service.getMatchedMenuItems = function () {
     var response = $http({
       method: "GET",
       url: (ApiBasePath + "/menu_items.json")
     });

     // process result and only keep items that match
     //var foundItems = ...


     return foundItems;

   };
  //service.getItemsToBuy = function () {
  //   return itemsToBuy;
  // };


}

})();
