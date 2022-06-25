import React, {useState} from 'react';
import './App.css';

import Todolist from "./components/Todolist";
import NewTodoForm from "./components/NewTodoForm";

import {todolist, TodoInterface} from './todos';

function App() {
    const [todos, setTodos] = useState<TodoInterface[]>(todolist);

    const addTodo = (newTodo: TodoInterface) => {
        console.log('=== ADD TODO', newTodo);
        setTodos(todos.concat(newTodo));
        console.log('==== TODO ADDED', todos);
    };

    return (
        <div className="App">
            <div>
                <Todolist todos={todos} />
                <NewTodoForm addTodo={addTodo} />
            </div>
        </div>
    );
}

export default App;
