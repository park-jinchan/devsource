// index2.js

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
// npm i express, cors, mysql2

const app = express();
const PORT = 7777;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 커넥션 풀 생성 : mysql.createPool({})
const pool = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'master', //root
    password: 'tiger', //1234
    database: 'kbdb',
    connectionLimit: 10,
    waitForConnections: true,
});

app.post('/api/users', async (req, res) => {
    const { name, email, passwd, role } = req.body;
    // 응답: result => [success, fail], message:결과메시지
    if (!name || !email || !passwd) {
        return res.status(400).json({ result: 'fail', message: '이름,이메일,비밀번호는 필수 입력입니다.' });
    }
    try {
        const sql = `insert into members(name, email, passwd, role) values(?,?,?,?)`;
        const [result] = await pool.query(sql, [name, email, passwd, role]);
        if (result.affectedRows > 0) {
            return res.json({
                result: 'success',
                message: `회원가입 완료. 등록된 회원번호는 ${result.insertId}번 입니다.`,
            });
        }
        res.json({ result: 'fail', message: '회원가입 실패!! 다시 시도하세요' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ result: 'fail', message: 'error: ' + error.message });
    }
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
