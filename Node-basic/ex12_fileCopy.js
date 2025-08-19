// ex12_fileCopy.js
// readStream.pipe(writeStream)  : 읽는 스트림과 쓰는 스트림을 연결해서 데이터를 자동으로 전달해주는 역할을 함
const fs = require('fs');
const zlib = require('zlib');

const fileCopy = function (src, dest) {
    const readStream = fs.createReadStream(src);
    const writeStream = fs.createWriteStream(dest);
    readStream.pipe(writeStream);
    console.log('>>>파일 카피 중<<<<');
};

//fileCopy() 호출해서 copy.txt로 카피하기
console.log('----Copy Start------');
// fileCopy('ex02_process.js', 'copy.txt');
// fileCopy('dog3.jpg', 'copy.jpg');

fs.createReadStream('dog3.jpg')
    .pipe(zlib.createGzip()) //gzip압축 => 단일 파일 압축. zip압축: 여러 파일 압축 가능
    .pipe(fs.createWriteStream('dog3.jpg.gz'))
    .on('finish', () => console.log('파일 압축 완료'));
