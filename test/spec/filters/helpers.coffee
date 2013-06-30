'use strict'

describe 'Filter: helpers', () ->

  # load the filter's module
  beforeEach module 'hexabonesApp'

  # initialize a new instance of the filter before each test
  generic = {}
  beforeEach inject ($filter) ->
    generic = $filter 'generic'

  it 'should return the input prefixed with "helpers filter:"', () ->
    text = 'angularjs'
    expect(generic text).toBe ('helpers filter: ' + text);
