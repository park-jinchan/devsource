import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm({ addTodo }) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value.trim()) return;
        addTodo(value);
        setValue('');
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                value={value}
                placeholder="새로운 Todo 추가"
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit">+</button>
        </form>
    );
}

export default TodoForm;
