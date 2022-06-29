import React, {useState} from 'react';
import {SubtodoInteface} from "../todos";

interface Props {
    addSubTodo: (subTodo: SubtodoInteface) => void;
}

const SubTodoForm = ({ addSubTodo }: Props) => {
    const [value, setValue] = useState('');

    const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!value) {
            return null;
        }

        const newSubtodo: SubtodoInteface = {
            id: Math.random().toString(16).slice(2),
            name: value,
            done: false
        };

        addSubTodo(newSubtodo);
        setValue('');
    };

    return (
        <form onSubmit={handleForm} id="new-subtodo-form">
            <input
                placeholder="Add new subtodo"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </form>
    );
};

export default SubTodoForm;