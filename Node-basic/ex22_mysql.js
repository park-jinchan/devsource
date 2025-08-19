//ex22_mysql.js
// npm i mysql mysql2
const mysql = require('mysql2/promise'); //asyn/await 구문 사용 가능
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const conn = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'master', //'root'
    password: 'tiger', //'1234'
    database: 'kbdb',
});
console.log('conn: ', conn);

app.post('/api/users', async (req, res) => {
    //name, email, passwd, role 데이터를 post 방식으로 전달 ==> req.body
    const { name, email, passwd, role } = req.body;
    //유효성 체크 (생략)

    //sql문 준비
    const sql = `insert into members (name, email, passwd, role) values(?,?,?,?)`;
    //인파라미터에 전달할 데이터
    const userData = [name, email, passwd, role];
    try {
        const [result] = await conn.query(sql, userData);
        console.log('result: ', result);
        if (result.affectedRows > 0) {
            res.json({ result: 'success', message: `등록 성공 회원번호는 ${result.insertId}번 입니다` });
        } else {
            res.json({ result: 'fail', message: '등록 실패 이메일 중복여부 확인하세요' });
        }
    } catch (err) {
        console.error('error: ', err);
        res.status(500);
    }
});

app.listen(5599, () => {
    console.log('http://localhost:5599');
});
