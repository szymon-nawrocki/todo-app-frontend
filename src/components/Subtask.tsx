import React from 'react';
import {SubtodoInteface, TodoInterface} from "../todos";
import './Subtask.css';

interface Props {
    subtask: SubtodoInteface;
    todoId: string;
    todos: TodoInterface[];
    setTodos: (todos: TodoInterface[]) => void;
}

const Subtask = ({ subtask, todoId, todos, setTodos }: Props) => {
    if (!subtask) {
        return null;
    }

    const handleCheckbox = () => {
        const updatedSubtask = { ...subtask, done: !subtask.done };

        const todoToUpdate = todos.find(todo => todo.id === todoId);

        const updatedSubtasks = todoToUpdate?.subtasks?.map(sub => sub.id !== subtask.id ? sub : updatedSubtask );

        const updatedTodo = {
            ...todoToUpdate,
            subtasks: updatedSubtasks
        };

        const updatedTodos = todos.map(t => t.id !== todoId ? t : updatedTodo) as TodoInterface[];
        setTodos(updatedTodos);
    };

    const handleDeleteBtn = () => {
        const todoToUpdate = todos.find(todo => todo.id === todoId);

        const updatedSubtasks = todoToUpdate?.subtasks?.filter(sub => sub.id !== subtask.id);

        const updatedTodo = {
            ...todoToUpdate,
            subtasks: updatedSubtasks
        };

        const updatedTodos = todos.map(t => t.id !== todoId ? t : updatedTodo) as TodoInterface[];

        setTodos(updatedTodos);
    };

    return (
        <div className="todo-container subtodo">
            <>
                <input type="checkbox" onChange={handleCheckbox} checked={subtask.done} />
                <p className={subtask.done ? 'todo todo-done' : 'todo'}>{subtask.name}</p>
            </>
            <button className="remove-btn" type="button" onClick={handleDeleteBtn}>
                &#10060;
            </button>
        </div>
    );
};

export default Subtask;