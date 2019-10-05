var applyPercentage = require('./applyPercentage');
var sumPrices = require('./sumPrices');

/**
 * Function that takes a list of prices, and returns the total price discounted.
 * 
 * @param {array} prices list of prices.
 * @param {number} discount discount price.
 * @returns {number} total sum of the prices discounted.
 */
function getOrderAmount(prices, discount) {
    var nonDiscountedAmount = sumPrices(prices)
    var discountedAmount = applyPercentage(nonDiscountedAmount, discount);
    
    return discountedAmount;
  }
  
  module.exports = getOrderAmount;
  