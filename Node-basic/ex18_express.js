// ex18_express.js
//npm i express
//npm -D nodemon
//-D (개발모드)
//외장모듈 express를 이용하면 http보다 편리한 기능을 제공
// 라우팅, 미들웨어, 에러 처리 등 다양한 기능을 가짐
// RESTful api구축시 유용
const express = require('express'); //외장 모듈
const app = express();

app.get('/', (req, res) => {
    //헤더값 설정: res.set()를 이용
    res.set('x-api-key', 'reqres-free-v1');
    res.send(`<h1>Hello World</h1><h2>안녕</h2>`);
    //res.send() : 응답 본문을 전송하고, 상태코드와 Content-Type을 자동으로 설정하고 종료도 함
    //상태코드 디폴트는 200
});
app.get('/page', (req, res) => {
    res.status(404).send();
});

app.listen(5555, () => {
    console.log('http://localhost:5555');
});
