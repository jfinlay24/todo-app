import React from 'react';
import ReactDOM from 'react-dom';
import Todo from "./components/Todo"

const todoList = [
    {
        id: 1,
        description: "List item 1"
    },
    {
        id: 2,
        description: "List item 2"
    },
    {
        id: 3,
        description: "List item 3"
    }
]

ReactDOM.render(<Todo list={todoList}/>, document.getElementById('root'));