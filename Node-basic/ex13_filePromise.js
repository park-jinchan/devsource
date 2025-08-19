// ex13_filePromise.js
// const fs = require('fs').promises; //promise방식으로 파일 읽고 쓰기
const { promises: fs } = require('fs');
console.log('----Start-------');
fs.readFile('ex03_os.js', 'utf8')
    .then((data) => {
        console.log(data.toString());
        return fs.readFile('ex04_module.js', 'utf8');
    })
    .then((data2) => console.log(data2))
    .catch(console.log);

fs.copyFile('./ex05_module.js', 'ex05_module_copy.txt').then(console.log('카피 완료'));
