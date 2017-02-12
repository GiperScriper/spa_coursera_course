(function () {
'use strict';

angular
  .module('items')
  .controller('ItemsController', itemsController);

itemsController.$inject = ['data'];
function itemsController(data) {
  var vm = this;
  vm.category = data.data.category.name;
  vm.menu_items = data.data.menu_items;
}

})();
