'use strict'

describe 'Controller: Shop', () ->

  # load the controller's module
  beforeEach module 'hexabonesApp'

  MyControllerCtrl = {}
  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    Shop = $controller 'Shop', {
      $scope: scope
    }

  it 'should attach a list of products to the scope', () ->
    expect(scope.products.length).toBe 3;
