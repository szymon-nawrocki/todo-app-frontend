import React from 'react';

interface Props {
    name: string;
}
const Todo = (props: Props) => {
    return <li className='todo'>{props.name}</li>;
};

export default Todo;