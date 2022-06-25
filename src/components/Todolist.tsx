import React, {useState} from 'react';
import Todo from './Todo';
import {TodoInterface} from "../todos";

interface Props {
    todos: TodoInterface[];
}

const Todolist = (props: Props) => {
    return (
        <div id='todolist-container'>
            <h2 id='todolist-title'>Todolist:</h2>
            <ul id='todolist-list-wrapper'>
                {props.todos.map(todo => <Todo key={todo.id} name={todo.name} />)}
            </ul>
        </div>
    );
};

export default Todolist;

