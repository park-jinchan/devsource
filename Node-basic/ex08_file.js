// ex08_file.js
// 내장 모듈 fs(file system module)을 사용해서 파일을 읽어보자
const fs = require('fs');
// 1. 동기방식으로 파일을 읽어보자
const data = fs.readFileSync('ex07_require.mjs', 'utf-8');
console.log(data); // 파일데이터 출력
console.log('바이바이');
// 2. 비동기방식으로 파일을 읽기
fs.readFile('ex07_require.mjs', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        throw err;
    }
    console.log('출력할 데이터: ' + data);
});
console.log('******************');
console.log('잘가세요~');
