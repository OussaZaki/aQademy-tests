var add = require("./add");
var assert = require("assert");

describe('Tests for my add function', function () {
    it('should return the mathematical addition of the inputs', function() {
        var result = add(3, 5);
        var expectedResult = 8;

        assert.equal(result, expectedResult);
    })

    it('should concatenate the inputs if they are strings', function() {
        var result = add("hello", "me");
        var expectedResult = "hellome";

        assert.equal(result, expectedResult);
    })
})