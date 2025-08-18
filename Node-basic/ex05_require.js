// ex05_require.js
// ex05_module 가져와서 square(), circle(), rectangle() 호출해보기

const obj = require('./ex05_module');
const a = obj.square(5);
console.log(a);

console.log(obj.rectangle(8, 4));
console.log(obj.circle(10));
