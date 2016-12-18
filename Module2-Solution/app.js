(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {

  var errorMessage = "";
  var BuyList = this;
  BuyList.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

  BuyList.RemoveItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItemToBuy(itemIndex);

    var checkToBuyLength = ShoppingListCheckOffService.getNumberOfItemsToBuy();
    if(checkToBuyLength==0){BuyList.errorMessage = "Everything is bought!";}

  };

}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var BoughtList = this;
  var BoughtErrorMessage = "";

  BoughtList.itemsBought = ShoppingListCheckOffService.getItemsBought();
  BoughtList.BoughtErrorMessage = "Nothing bought yet.";

}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var itemsToBuy = [
    {
       name: "Milk",
       quantity: "2"
     },
     {
       name: "Eggs",
       quantity: "6"
     },
     {
       name: "Bread",
       quantity: "3"
     },
     {
       name: "Chocolate",
       quantity: "5"
     },
     {
       name: "Coffee",
       quantity: "5"
     }
  ];
  var itemsBought = [];

  service.removeItemToBuy = function (itemIndex) {
    var item = itemsToBuy[itemIndex];
    itemsBought.push(item);
    itemsToBuy.splice(itemIndex,1);
   };

   service.getNumberOfItemsToBuy = function () {
     return itemsToBuy.length;
   };

  service.getItemsToBuy = function () {
    return itemsToBuy;
  };

  service.getItemsBought = function () {
    return itemsBought;
  };

}

})();
