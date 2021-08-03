import React from 'react';
import Todo from "./components/Todo";
import './style.css';

function App() {

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
    },
    {
      id: 4,
      description: "List item 4"
    }
  ]
  return (
        <Todo list={todoList} />
  )
};
export default App;
