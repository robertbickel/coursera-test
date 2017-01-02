(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

// 'item' is injected through state's resolve
ItemDetailController.$inject = ['items']
function ItemDetailController(items) {
  var itemlist = this;
  itemlist.items = items;


  // mainList.categories = categories;
  // var itemDetail = this;
  // itemDetail.name = item.name;
  // itemDetail.price_large = item.price_large;
  // itemDetail.description = item.description;
}

})();
