// ex04_require.js
/**
 * require('모듈파일명')
 * - 이 때 확장자 .js는 생략해도 된다
 * require('./module1')
 * [1] require()하면 먼저 module1.js를 찾는다.
 * [2] 해당 파일이 없으면 module1이라는 디렉토리를 찾는다.
 * [3] 디렉토리가 있으면 해당 디렉토리의 index.js를 찾는다.
 */
// const obj = require('./ex04_module.js')
const obj = require('./ex04_module');
// const obj2 = require('./sample/index.js');
const obj2 = require('./sample');

console.log(obj.pi);
//areaCircle()/plus()/minus() 호출해보기
const area = obj.areaCircle(obj.pi, 7);
console.log(area);

const sum = obj.plus(20, 40);
console.log(sum);

const result = obj.minus(99, 88);
console.log(result);

//sample/index.js에서 내보낸 gop(), divide()호출하세요
obj2.gop(14, 3);
const result2 = obj2.divide(14, 3);
console.log(result2);
