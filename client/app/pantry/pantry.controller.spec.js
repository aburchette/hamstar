'use strict';

describe('Controller: PantryCtrl', function () {

  // load the controller's module
  beforeEach(module('hamstarApp'));

  var PantryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PantryCtrl = $controller('PantryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
