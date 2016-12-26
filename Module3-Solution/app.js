(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', foundItemsDirective);

function foundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    restrict: 'E',
    scope: {
      foundItems: '<',
      onRemove: '&'
    },
    controller: FoundItemsController,
    controllerAs: 'foundItemsController',
    bindToController: true
  };

  return ddo;
}

  FoundItemsController.$inject = [];
  function FoundItemsController(){
    var foundItemsController = this;
  }

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {

    var NarrowedDownList = this;
    NarrowedDownList.found = [];
    NarrowedDownList.message = '';
    NarrowedDownList.searchTerm = '';
    NarrowedDownList.getMenuItems = function (searchTerm) {

      if(searchTerm === ""){
        NarrowedDownList.found = [];
        NarrowedDownList.message = "Nothing found";
      }else{
        MenuSearchService.getMatchedMenuItems(searchTerm).then(function(foundData){
        NarrowedDownList.found = foundData;
        if (foundData.length > 0){
          NarrowedDownList.message = "Menu Items Matching Criteria";
        }else{
          NarrowedDownList.message = "Nothing found";
        }
      });
    };

  }

  NarrowedDownList.onRemove = function(index){
    NarrowedDownList.found.splice(index, 1);
  };



}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var MenuSearchService = this;

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

    function narrrowItDown(foundItems, searchTerm){
        //
        // for (var i = Auction.auctions.length - 1; i >= 0; i--) {
        //     Auction.auctions[i].seconds--;
        //     if (Auction.auctions[i].seconds < 0) {
        //         Auction.auctions.splice(i, 1);
        //     }
        //
        for(var i=foundItems.length - 1;i >= 0;i--){

          var str1 = foundItems[i].description.toString();
          var str2 = searchTerm.toString();
          str1 = str1.toLowerCase();

          if(str1.toLowerCase().indexOf(str2.toLowerCase()) == -1){
           foundItems.splice(i, 1);
          };
        };
        return foundItems;
    } //end functionnarrowItDown


//end MenuSearchService
}


})();
