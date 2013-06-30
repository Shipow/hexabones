'use strict'

describe 'Service: DataSource', () ->

  # load the service's module
  beforeEach module 'hexabonesApp'

  # instantiate service
  DataSource = {}
  beforeEach inject (_DataSource_) ->
    DataSource = _DataSource_

  it 'should do something', () ->
    expect(!!DataSource).toBe true;
