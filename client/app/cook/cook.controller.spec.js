'use strict';

describe('Controller: CookCtrl', function () {

  // load the controller's module
  beforeEach(module('hamstarApp'));

  var CookCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CookCtrl = $controller('CookCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
