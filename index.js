var add = require('./add');
var applyPercentage = require('./percentage');

console.log(add(4, 5));
console.log(add('%', 'a'));
console.log(add('hello', ' victor'));

console.log(applyPercentage(1000, 50));
