/**
 * Function that takes a list of prices, and returns the total price
 * 
 * @param {array} prices list of prices
 * @returns {number} total sum of the prices.
 */
function sumPrices(prices) {
  var sum = 0;
  prices.forEach(price => {
    sum = sum + price;
  });
  return sum;
}

module.exports = sumPrices;
