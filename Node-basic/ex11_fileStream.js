const fs = require('fs');
const writeStream = fs.createWriteStream('out.txt', { encoding: 'utf-8' });
//text기반 파일을 쓸 경우: encoding설정
//바이너리 데이터(동영상,오디오)를 쓸 경우는 encoding없이 Buffer로 다뤄야 함

writeStream.write('첫 번째 줄\n'); //데이터를 스트림에 씀
writeStream.write('두 번째 줄\n');
writeStream.write('세 번째 줄\n');
writeStream.end('마지막 줄\n'); //스트림 종료. 내부적으로 파일 디스크립터가 자동으로 닫힘

writeStream.on('finish', () => {
    //쓰기 완료 이벤트
    console.log('out.txt에 쓰기 완료');
});

writeStream.on('error', (err) => console.error(err.message));
