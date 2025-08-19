// ex08_file.js
//내장 모듈 fs(file system module)을 사용해서 파일을 읽어보자
const fs = require('fs');

//1. 동기방식으로 파일을 읽어보자
const data = fs.readFileSync('ex07_require.mjs', 'utf-8');
console.log(data); //파일 데이터 출력
console.log('Bye Bye~~~');

//2. 비동기방식으로 파일 읽기
fs.readFile('ex07_require.mjs', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        throw err;
    }
    console.log(data);
});
console.log('****************');
console.log('잘가세요~');
