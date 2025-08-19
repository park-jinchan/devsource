// ex21_router.js
// '/' ==> index.html
//'/users' ==> 회원관련 페이지
//'/board' ===> 게시판 관련 페이지
//express.Router() 를 사용하면 라우터를 파일단위로 분리할 수 있다
/**
 * -- ex21_router.js ==> 메인 서버페이지
 * ---routes/
 *      +---user.js
 *      +---board.js
 *
 */
const express = require('express');
//라우터 모듈 가져오기
const userRouter = require('./routes/user');
const boardRouter = require('./routes/board');

const app = express();
app.set('port', 5588);

//static 미들웨어 설정
app.use(express.static(__dirname + '/public'));

// '/'==> index.html보여주기
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
/////////////////////////
app.use('/users', userRouter);
app.use('/boards', boardRouter);
////////////////////////////

app.listen(app.get('port'), () => {
    console.log(`http://localhost:${app.get('port')}`);
});
