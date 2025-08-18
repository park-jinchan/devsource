// ex01.global.js
/*
- 전역에서 접근할 수 있는 객체, 
 - Node.js의 런타임 환경 내에서 전역적으로 사용할 수 있는 다양한 속성과 함수들을 제공한다. 
   브라우저 환경의 window 객체와 유사하지만, Node.js의 환경에 맞게 구성
   (브라우저가 아니므로 window객체 없음. 대신 global객체로 이용)
- 이 객체에 직접 접근하거나 자신만의 전역 변수를 추가하는 것이 가능
 */

// require() 없이 바로 사용 가능.
console.log(global);
console.log('***********************');

global.console.log('로그 남김');
global.setTimeout(() => {
    console.log('1초 후에 실행...');
}, 1000);

global.myvar = '전역변수';
global.myfunc = () => {
    console.log('Global Function');
};
console.log(myvar);
myfunc();
// console.log(window.alert('hi')); [X]
// global: 전역객체
// 노드의 전역변수: __filename, __dirname : 경로에 대한 정보를 제공
console.log('현재 실행중인 파일명: %s', __filename);
console.log('현재 실행중인 파일의 상위 경로: %s', __dirname);
