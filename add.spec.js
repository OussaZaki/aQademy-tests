var add = require("./add");
var assert = require("assert");

describe('Tests for my add function', function () {
    it('should return the mathematical addition of the inputs', function() {
        var result = add(3, 5);
        var expectedResult = 8;

        assert.equal(result, expectedResult);
    })
})