import React, { useState } from 'react';

import './Form.css';
import {TodoInterface} from "../todos";

interface Props {
    visible: boolean;
    todos: TodoInterface[];
    setTodos: (todos: TodoInterface[]) => void;
}

const Form = ({ visible, todos, setTodos }: Props) => {
    const [todo, setTodo] = useState('');

    if (!visible) {
        return null;
    }

    const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (todo === '') {
            return null;
        }

        const newTodo: TodoInterface = {
            id: Math.random().toString(16).slice(2),
            name: todo,
            done: false,
        };

        setTodo('');
        setTodos(todos.concat(newTodo));
    };

    return (
        <form className="list-form" onSubmit={addTodo}>
            <input
                placeholder="Add new todo"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
        </form>
    );
};

export default Form;
