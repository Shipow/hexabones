'use strict'

describe 'Service: products', () ->

  # load the service's module
  beforeEach module 'hexabonesApp'

  # instantiate service
  products = {}
  beforeEach inject (_products_) ->
    products = _products_

  it 'should do something', () ->
    expect(!!products).toBe true;
