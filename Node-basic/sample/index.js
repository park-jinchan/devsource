// sample/index.js
// gop(), divide() 함수를 구성해서 exports 하세요
// ex04_requires.js에서 gop(),divde()를 호출해 그 결과 출력하세요
exports.gop = (a, b) => {
    console.log(`${a} x ${b} = ${a * b}`);
    return a * b;
};
exports.divide = function (a, b) {
    console.log(`${a} / ${b} = ${a / b}`);
    return a / b;
};
