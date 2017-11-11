const chai = require('chai');
const assert = chai.assert;
const strReplace = require('../js/functions').strReplace;
const tooManyOperators = require('../js/functions').tooManyOperators;

describe ('strReplace', function () {
  it('should replace "÷" with "/"', function () {
    assert.equal(strReplace("5÷2"), "5/2");
  })
  it('should replace "x" with "*"', function () {
    assert.equal(strReplace("57x2"), "57*2");
  })
  it('should replace "=" with ""', function () {
    assert.equal(strReplace("57x2="), "57*2");
  })
})

describe ('tooManyOperators', function () {
  it('should return true if there are too many operators in the expression', function () {
    assert.equal(tooManyOperators("67x6÷"), true);
  })
  it('should return false if there are is only one operator in the expression', function () {
    assert.equal(tooManyOperators("67x6"), false);
  })
})
