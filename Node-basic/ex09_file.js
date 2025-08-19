// ex09_file.js
const fs = require('fs');
const data = 'Nice to meet you!! 반가워요~';
//파일쓰기: greeting.txt
//1. 동기방식
fs.writeFileSync('greeting.txt', data);
console.log('greeting.txt파일에 쓰기 완료했어요');

// 2. 비동기방식
fs.writeFile('greeting2.txt', data, 'utf-8', (err) => {
    if (err) {
        console.log('파일 쓰기 중 에러 발생: ', err.message);
        throw err;
    }
    console.log('greeting2.txt에 쓰기 완료');
});
console.log('**Bye Bye**********');
