// ex03_os.js
// os 모듈 (내장모듈)
const os = require('os'); //==> CommonJS 표준
//import os from 'os' ===> ES 표준 (package.json에 type:'moduel'로 설정하던지 파일명 __.mjs)

console.log('OS 시스템의 타입: %s, 시스템의 hostname: %s', os.type(), os.hostname());
console.log('시스템 메모리: %d bytes / %d bytes', os.freemem(), os.totalmem());

//bytes를 KB로 변환  => bytes/1024
//bytes를 MB로 변환  =>bytes/(1024*1024)
console.log('---CPU정보-----------');
console.log(os.cpus());
console.log(os.cpus().length); //논리적 cpu 코어 수를 반환
console.log('---시스템의 네트워크 정보-----');
console.dir(os.networkInterfaces())
