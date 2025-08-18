// ex06_require.js
// sample2에서 모듈을 가져와서 plus()/minus(), square(), printStar()
const obj = require('./sample2');
// sample2/index.js에서 module.exports = { calc, area, print };
// obj.plus(2,3); [X]
const x = obj.calc.plus(2, 3);
console.log(x);

const { calc, area, print } = obj;
const y = area.mysquare(5);
console.log(y);

print(5);
console.log(calc.minus(88, 55));
