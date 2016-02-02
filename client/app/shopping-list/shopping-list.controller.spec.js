'use strict';

describe('Controller: ShoppingListCtrl', function () {

  // load the controller's module
  beforeEach(module('hamstarApp'));

  var ShoppingListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShoppingListCtrl = $controller('ShoppingListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
