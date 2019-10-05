var sumPrices = require("./sumPrices");
var assert = require("assert");

describe('Tests for sumPrices', function () {
    it('sum the array of the prices', function() {
        var result = sumPrices([100, 200, 500]);
        var expectedResult = 800;

        assert.equal(result, expectedResult);
    })

    it('returns 0 if the array is empty', function() {
      var result = sumPrices([]);
      var expectedResult = 0;

      assert.equal(result, expectedResult);
  })
})