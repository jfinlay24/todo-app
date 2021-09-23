import React from 'react';
import Todo from "./components/Todo";
function App() {

  const todoList = [
    {
      id: 1,
      description: "List item 1",
      checked: false,
      textDecor: "clear"
    },
    {
      id: 2,
      description: "List item 2",
      checked: false,
      textDecor: "clear"
    },
    {
      id: 3,
      description: "List item 3",
      checked: false,
      textDecor: "clear"
    },
    {
      id: 4,
      description: "List item 4",
      checked: false,
      textDecor: "clear"
    }
  ]
  return (
    <Todo list={todoList} />
  )
};
export default App;