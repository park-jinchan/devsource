import React from 'react';
import './TodoListItem.css';

function TodoListItem({ todo, toggleComplete, deleteTodo }) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo.id)} />
            <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
            <small>{todo.date}</small>
            <button onClick={() => deleteTodo(todo.id)}>삭제</button>
        </div>
    );
}

export default TodoListItem;
