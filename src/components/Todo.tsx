import React from 'react';
import './Todo.css';
import { TodoInterface } from "../todos";

interface Props {
    id: string;
    todos: TodoInterface[];
    setTodos: (todos: TodoInterface[]) => void;
}

const Todo = ({ id, todos, setTodos }: Props) => {
    const todo = todos.find((todo) => todo.id === id);

    if (!todo) {
        return null;
    }

    const handleCheckbox = () => {
        const updatedTodo = { ...todo, done: !todo.done };
        setTodos(todos.map((todo) => (todo.id !== id ? todo : updatedTodo)));
    };

    const handleDeleteBtn = () => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="todo-container">
            <div>
                <input type="checkbox" onChange={handleCheckbox} checked={todo.done} />
                <p className={todo.done ? 'todo todo-done' : 'todo'}>{todo.name}</p>
            </div>
            <button className="remove-btn" type="button" onClick={handleDeleteBtn}>
                &#10060;
            </button>
        </div>
    );
};

export default Todo;
