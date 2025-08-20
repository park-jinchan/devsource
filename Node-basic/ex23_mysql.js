//my23_mysql.js
const express = require('express');
const mysql = require('mysql2/promise'); //async /await
//npm i mysql mysql2

const app = express();
const PORT = 5555;

app.use(express.json()); //json데이터 파싱 미들웨어
app.use(express.urlencoded({ extended: true }));

//db접속
//createConnection()==>DB에 단일 연결
//createPool() ==> DB에 다중 연결 (커넥션 풀)
let conn; //전역변수
//즉시 실행 함수
(async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'master', //root
        password: 'tiger', //1234
        database: 'kbdb',
    });
    //console.log('conn: ', conn);
    console.log('MySQL DB 연결됨...');
})();

app.post('/api/users', async (req, res) => {
    const { name, email, passwd, role } = req.body;
    if (!name || !email || !passwd) {
        return res.status(400).send(`<h3>이름,이메일,비밀번호를 입력해야해요</h3>`);
    }
    try {
        const sql = `insert into members(name,email,passwd,role) values(?,?,?,?)`;
        /**
         *  conn.query(sql,[인파라미터값들])
         * ==> 반환값은 [rows (or OkPacket), fields ]
         * select문일 경우=> rows
         * insert/delete/update ==> OkPacket{affectedRows:1,insertId:8,...}
         */
        const [result] = await conn.query(sql, [name, email, passwd, role]);

        console.log('result: ', result);
        if (result.affectedRows > 0) {
            res.send(`<h2>등록된 회원번호는 ${result.insertId} 입니다</h2>`);
        } else {
            res.send(`<h2>회원가입 실패. 다시 시도하세요</h2>`);
        }
    } catch (err) {
        res.status(500).send('<h2>Server Error: ' + err.message + '</h2>');
    }
});
//select문 - Read (조회)
app.get('/api/users', async (req, res) => {
    //const sql = `select id,name,email,role,createdAt from members order by id desc`;
    const sql = `select id, name, email, role, date_format(createdAt,'%Y-%m-%d') as createdAt
                 from members order by id desc`;
    try {
        //const result = await conn.query(sql);
        //console.log('result: ', result); //[ [{},{}],[field정보]]
        const [rows] = await conn.query(sql); // rows: [{},{}]
        if (rows.length == 0) {
            return res.send(`<h2>등록된 회원이 없습니다</h2>`);
        }

        let str = `
            <h2>모든 회원 목록</h2>
            <ul>`;
        //rows반복문 돌면서 li태그에 회원정보 출력하기
        for (data of rows) {
            str += `<li>${data.id}, ${data.name}, ${data.email}, ${data.role}, ${data.createdAt}
            </li>
            `;
        }
        str += `</ul>`;
        res.send(str);
        //res.json(rows);
    } catch (err) {
        res.status(500).send('<h2>Server Error: ' + err.message + '</h2>');
    }
});
//회원번호로 회원 정보 조회
//post방식일 때 사용자 입력한 값: req.body
//path변수값 : req.params
//querystring : req.query
//?name=a&email=b
app.get('/api/users/:id', async (req, res) => {
    console.log(req.params.id);
    const { id } = req.params;
    if (!id || isNaN(id)) {
        return res.send(`<h2>잘못 들어온 경로입니다</h2>`);
    }
    try {
        const sql = `select id,name,email,role,
            date_format(createdAt,'%Y-%m-%d') createdAt
            from members where id=?`;
        //query()로 실행시켜서 해당 회원정보를 브라우저에 보내기
        const [result] = await conn.query(sql, [id]);
        console.log(result);
        if (result.length == 0) {
            return res.send(`<h2>회원 정보가 존재하지 않아요</h2>`);
        }
        //id(PK) 로 가져올 경우 데이터는 1개
        const { id: no, name, email, role, createdAt } = result[0];
        let str = `<h2>${no}번 회원 정보</h2>
            <h3>이 름: ${name}</h3>
            <h3>이메일: ${email}</h3>
            <h3>가입일: ${createdAt}</h3>
            <h3>ROLE : ${role}</h3>`;
        res.send(str); //html응답시
        // res.json(result); //json응답시
    } catch (err) {
        res.send(`<h2>Server Error: ${err.message} </h2>`);
    }
});
/** RESTful 웹서비스
 * http://localhost:5555/api/users
 * 요청 URI  /api/users
 * C : Create - Insert문 ==> POST   /api/users  =>  request body부분에 새로 삽입할 data를 포함
 * R : Read   - Select문 ==> GET    /api/users  or  /api/users/3
 * U : Update - Update문 ==> PUT/PATCH  /api/users/3 =>  request body부분에 새로 수정할 data를 포함
 * D : Delete - Delete문 ==> DELETE      /api/users/3
 */
app.delete('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    if (!id || isNaN(id)) {
        return res.send(`유효하지 않은 회원번호입니다`);
    }
    try {
        //set @@autocommit=0 설정 변경하면 수동 커밋으로 변경됨. ==> 프로그램에서 Transaction 처리를 해야 한다
        //delete문 작성해서 실행시킨 뒤 그 결과 확인후 결과에 따른 메시지 처리하세요
        const sql = `delete from members where id=?`;
        //트랙잭션 시작 (수동 커밋)
        await conn.beginTransaction();
        const [result] = await conn.query(sql, [id]);
        console.log(result);
        await conn.commit(); //수동 커밋 (DB에 영구히 반영) - 트랜잭션 종료
        console.log(id + '번 정보 삭제');

        res.send(`회원정보 삭제 예정: 회원번호=${req.params.id}`);
    } catch (error) {
        console.error('error: ', error);
        await conn.rollback(); //에러 발생시 롤백(취소) -- 트랜잭션 종료
        res.status(500).send('Server Error: ' + error.message);
    }
});
//회원정보 수정: put/patch
//모든 정보 수정시 put방식, 정보의 일부분 수정시에는 patch방식
app.put('/api/users/:id', async (req, res) => {
    //회원번호 받기
    const { id } = req.params;

    //수정할 회원정보
    const { name, email, passwd, role } = req.body;
    console.log(id, name, email, passwd, role);
    try {
        //update문 작성해서 수정 처리후 그 결과에 따른 메시지 처리
        const sql = `update members set name=?, email=?, passwd=?, role=? where id=?`;
        const [result] = await conn.query(sql, [name, email, passwd, role, id]);
        console.log(result);
        if (result.affectedRows > 0) {
            res.send(`<h2>${id}번 회원님의 정보를 수정했어요</h2>`);
        } else {
            res.send(`<h2>회원정보 수정 실패. 회원번호를 확인하세요</h2>`);
        }
    } catch (error) {
        res.status(500).send(`<h3>Server Error: ${error.message}</h3>`);
    }
});

//회원정보 일부만 수정하는 경우 (patch방식)
app.patch('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    console.log('id: ', id);
    console.log('updateData: ', updateData); //updateData:  { email: 'hong2@naver.com', role: 'USER' }
    //updateData:  { passwd: '333' }
    //동적으로 sql문을 구성해야 함
    const columns = Object.keys(updateData); //매개변수 객체의 key값들만 추출
    const values = Object.values(updateData); //vlaue값들만 추출
    console.log('columns: ', columns); // [email,role]
    console.log('values: ', values); //['hong2@naver.com','USER']

    if (columns.length === 0) {
        return res.status(400).send('<h3>수정할 값을 입력해야 해요</h3>');
    }
    const setStr = columns.map((col) => `${col}=?`).join(', ');
    //[email=?, role=? ].join(', ') ==>'email=?, role=?'
    const sql = `update members set ${setStr} where id=?`;
    console.log('sql: ', sql);
    try {
        const [result] = await conn.query(sql, [...values, id]);
        if (result.affectedRows > 0) {
            res.send(`<h2>회원 정보를 수정했습니다</h2>`);
        } else {
            res.status(404).send('<h2>해당 회원이 없어요</h2>');
        }
    } catch (error) {
        res.status(500).send(`<h3>Server Error: ${error.message}</h3>`);
    }
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
