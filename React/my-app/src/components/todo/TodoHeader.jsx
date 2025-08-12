import React from 'react';

function TodoHeader() {
    const today = new Date();
    const options = { year: 'numeric', month: 'short', day: 'numeric', weekday: 'short' };

    return (
        <header className="todo-header">
            <h1>오늘 할 일 (To Do List)</h1>
            <p>{today.toLocaleDateString('en-US', options)}</p>
        </header>
    );
}

export default TodoHeader;
