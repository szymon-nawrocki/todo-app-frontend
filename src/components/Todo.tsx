import React, { useState } from 'react';
import './Todo.css';
import { SubtodoInteface, TodoInterface } from "../todos";
import SubTodoList from "./SubTodoList";

interface Props {
    id: string;
    todos: TodoInterface[];
    setTodos: (todos: TodoInterface[]) => void;
}

const Todo = ({ id, todos, setTodos }: Props) => {
    const [subTodosVisible, setSubTodosVisible] = useState(false);
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

    const addSubTodo = (subTodo: SubtodoInteface) => {
        const updatedTodo = !todo.subtasks
            ? {...todo, subtasks: [subTodo]}
            : {...todo, subtasks: todo.subtasks.concat(subTodo)};

        const updatedTodos = todos.map(t => t.id !== id ? t : updatedTodo);

        setTodos(updatedTodos);
    };

    return (
        <>
            <div className="todo-container">
                <>
                    <input type="checkbox" onChange={handleCheckbox} checked={todo.done} />
                    <p onClick={() => setSubTodosVisible(!subTodosVisible)} className={todo.done ? 'todo todo-done' : 'todo'}>{todo.name}</p>
                </>
                <button className="remove-btn" type="button" onClick={handleDeleteBtn}>
                    &#10060;
                </button>
            </div>
            <SubTodoList isVisible={subTodosVisible}  todo={todo} todos={todos} setTodos={setTodos} addSubTodo={addSubTodo} />
        </>
    );
};

export default Todo;
