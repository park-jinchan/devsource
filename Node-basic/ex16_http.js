// ex16_http.js
//웹서버를 구축 가능하게 하는 모듈
const http = require('http');
const server = http.createServer((req, res) => {
    //요청관 관련: req
    //응답과 관련: res
    console.log(req.method);
    console.log(req.url);

    res.statusCode = 200; //성공적 응답 200 OK
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write('<h1>Hello Node.js</h1>');
    res.write('<h2>안녕? HTTP Server</h2>');
    res.end();
});
//서버 가동
server.listen(5555, () => {
    console.log('http://localhost:5555');
});
