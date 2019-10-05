var applyPercentage = require("./percentage");
var assert = require("assert");

describe('Tests for percentage', function () {
    it('should apply the percentage to my value', function() {
        var result = applyPercentage(1200, 25);
        var expectedResult = 300;

        assert.equal(result, expectedResult);
    })
})