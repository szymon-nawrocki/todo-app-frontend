import React from 'react';
import {SubtodoInteface, TodoInterface} from "../todos";
import Subtask from "./Subtask";
import SubTodoForm from "./SubTodoForm";
import './SubTodoList.css';

interface Props {
    todo: TodoInterface;
    todos: TodoInterface[];
    setTodos: (todos: TodoInterface[]) => void;
    isVisible: boolean;
    addSubTodo: (subTodo: SubtodoInteface) => void;
}

const SubTodoList = ({ isVisible, todo, todos, setTodos, addSubTodo }: Props) => {
    if (!isVisible) {
        return null;
    }

    if (!todo.subtasks) {
        return <SubTodoForm addSubTodo={addSubTodo} />;
    }

    return (
        <div className="subtasks">
            {todo.subtasks.map(subtask => (
                <Subtask key={subtask.id} todoId={todo.id} subtask={subtask} todos={todos} setTodos={setTodos} />
            ))}
            <SubTodoForm addSubTodo={addSubTodo}/>
        </div>
    );
};

export default SubTodoList;