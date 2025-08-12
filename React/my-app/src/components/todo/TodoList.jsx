import React from 'react';
import './TodoList.css';
import TodoListItem from './TodoListItem';

function TodoList({ todos, toggleComplete, deleteTodo }) {
    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <TodoListItem key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
            ))}
        </div>
    );
}

export default TodoList;
