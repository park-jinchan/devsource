const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ���� ȸ�� ������
let users = [
    { id: 1, name: 'ȫ�浿', email: 'hong@test.com', passwd: '1234', role: 'USER', createAt: '2025-08-14' },
    { id: 2, name: '�̸���', email: 'lee@test.com', passwd: 'abcd', role: 'ADMIN', createAt: '2025-08-14' }
];

let userIdCounter = users.length;

// ȸ�� ���
app.post('/users', (req, res) => {
    const { name, email, passwd, role } = req.body;
    if (!name || !email || !passwd || !role) {
        return res.status(400).send('��� �ʵ带 �Է��ؾ� �մϴ�');
    }
    // �̸��� �ߺ� üũ
    if (users.find(u => u.email === email)) {
        return res.status(400).send('�̹� �����ϴ� �̸����Դϴ�');
    }

    const newUser = {
        id: ++userIdCounter,
        name,
        email,
        passwd,
        role,
        createAt: new Date().toISOString().split('T')[0]
    };
    users.push(newUser);
    res.json({ result: 'ok', user: newUser });
});

// ȸ�� ���
app.get('/users', (req, res) => {
    res.send(users);
});

// ȸ�� �󼼺���
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find(u => u.id === parseInt(id));
    if (!user) return res.status(404).send('ȸ���� �����ϴ�');
    res.send(user);
});

// ȸ�� ����
app.post('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, passwd, role } = req.body;

    const userIndex = users.findIndex(u => u.id === parseInt(id));
    if (userIndex === -1) return res.status(404).send('ȸ���� �����ϴ�');

    // �̸��� �ߺ� üũ (�ڱ� �ڽ� ����)
    if (users.some(u => u.email === email && u.id !== parseInt(id))) {
        return res.status(400).send('�̹� �����ϴ� �̸����Դϴ�');
    }

    users[userIndex] = {
        ...users[userIndex],
        name,
        email,
        passwd,
        role
    };
    res.json({ result: 'ok', user: users[userIndex] });
});

// ȸ�� ����
app.get('/users/delete/:id', (req, res) => {
    const { id } = req.params;
    const index = users.findIndex(u => u.id === parseInt(id));
    if (index === -1) return res.status(404).send('ȸ���� �����ϴ�');

    users.splice(index, 1);
    res.json({ result: 'ok' });
});

app.listen(PORT, () => {
    console.log(`server on : http://localhost:${PORT}`);
});
