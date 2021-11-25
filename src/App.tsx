import React from 'react';
import Todo from "./components/Todo";
function App() {

  const todoList = [
    {
      id: 1,
      description: "List item 1",
      textDecor: "line"
    },
    {
      id: 2,
      description: "List item 2",
      textDecor: "line"
    },
    {
      id: 3,
      description: "List item 3",
      textDecor: "line"
    }
  ]
  return (
    <Todo list={todoList} />
  )
};
export default App;