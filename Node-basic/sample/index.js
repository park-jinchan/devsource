// sample/index.js
// gop(), divide() 함수 구성해서 exports 하세요
// ex04_require.js에서  gop(), divide() 호출해 결과 출력

exports.gop = (a, b) => {
    console.log(`${a} x ${b} = ${a * b}`);
    return a * b;
};

exports.divide = function (a, b) {
    console.log(`${a} / ${b} = ${a / b}`);
    return a / b;
};
