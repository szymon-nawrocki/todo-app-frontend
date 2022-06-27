import React, { useState, useEffect } from 'react';
import todosService from '../services/todos';

import './List.css';
import Form from './Form';
import Todo from './Todo';
import {TodoInterface} from "../todos";

const List = () => {
    const [formVisible, setFormVisible] = useState<boolean>(false);
    const [todos, setTodos] = useState<TodoInterface[]>([]);

    useEffect(() => {
        const initialTodos = todosService.getAll();
        setTodos(todos.concat(initialTodos));
    }, []);

    const handleClick = () => {
        setFormVisible(!formVisible);
    };

    return (
        <div className="list-container">
            <div className="header">
                <p className="title">TO-DO LIST</p>
                <button className="plus-btn" type="button" onClick={handleClick}>
                    &#10133;
                </button>
            </div>
            <Form visible={formVisible} todos={todos} setTodos={setTodos} />
            <div className="todos">
                {todos.map((todo) => (
                    <Todo key={todo.id} id={todo.id} todos={todos} setTodos={setTodos} />
                ))}
            </div>
        </div>
    );
};

export default List;
