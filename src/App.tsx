import React from 'react';
import Todo from "./components/Todo";
function App() {

  const todoList = [
    {
      id: 1,
      description: "List item 1",
      checked: false,
      textDecor: "line"
    },
    {
      id: 2,
      description: "List item 2",
      checked: false,
      textDecor: "line"
    },
    {
      id: 3,
      description: "List item 3",
      checked: false,
      textDecor: "line"
    },
    {
      id: 4,
      description: "List item 4",
      checked: false,
      textDecor: "line"
    }
  ]
  return (
    <Todo list={todoList} />
  )
};
export default App;