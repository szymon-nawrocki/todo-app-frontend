import React, {useState} from 'react';
import {TodoInterface} from "../todos";

interface Props {
    addTodo: (todo: TodoInterface) => void;
}
const NewTodoForm = (props: Props) => {
    const initialInput = 'task name';
    const [input, setInput] = useState(initialInput);

    const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newTodo: TodoInterface = {
            id: Math.random().toString(16).slice(2),
            name: input,
            done: false,
        };

        props.addTodo(newTodo);

        setInput('');
    };

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        if (input === initialInput) {
            const lastChar = input.substr(initialInput.length-1);

            event.currentTarget.value = lastChar;
        }

        console.log('=== set the input', input);
        setInput(event.currentTarget.value);
    };

    return (
        <form id='todolist-form' onSubmit={addTodo}>
            add new:
            <input onChange={handleChange} value={input} />
            <button type='submit'>save</button>
        </form>
    );
};

export default NewTodoForm;