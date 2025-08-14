const express = require('express');
const cors = require('cors');

const PORT = 7777;

const app = express();

app.use(cors()); // cors 미들웨어 설정
app.use(express.json()); //json유형의 데이터를 받도록 미들웨어 설정
let users = [{ id: 1, name: '마스터김', email: 'admin@a.b.c', role: 'ADMIN', createdAt: '2025-08-14' }];
let idCnt = users.length;

//post '/api/signup'
app.post('/api/signup', (req, res) => {
    // 회원정보는 post방식일 때 request의 body에 포함되어 온다
    const { name, passwd, email, role } = req.body;
    console.log(name, passwd, email, role);
    //유효성 체크
    if (!name || !passwd || !email || !role) {
        return res.status(400).json({ result: 'fail', message: '모든 값을 입력해야 해요' });
    }
    // 이메일 중복체크 로직 => DB에서 확인

    // 회원 정보를 DB MEMBER테이블에 INSERT하는 로직
    const newUser = { id: ++idCnt, name: name, email, role, createdAt: '2025-08-14' };
    users.push(newUser);

    res.json({ result: 'success', message: `회원가입 처리되었습니다. 회원번호는 ${newUser.id}번입니다` });
});

// 전체 회원 목록
app.get('/api/users', (req, res) => {
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`서버 시작됨 http://localhost:7777`);
});
