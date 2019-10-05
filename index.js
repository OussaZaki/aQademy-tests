var add = require('./add');
var applyPercentage = require('./applyPercentage');
var sumPrices = require('./sumPrices');
var getOrderAmount = require('./getOrderAmount');

// Manually testing add.
console.log(add(4, 5));
console.log(add('%', 'a'));
console.log(add('hello', ' victor'));

// Manually test applyPercentage.
console.log(applyPercentage(1000, 50));

// Manually test sumPrices.
console.log(sumPrices([100, 50, 20]));

// Manually test getOrderAmount.
console.log(getOrderAmount([100, 50, 20], 25));