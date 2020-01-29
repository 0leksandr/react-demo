import React from 'react';
import TodoList from "./Todo/TodoList";

const Todos = [
  {id: 1, title: "Title 1"},
  {id: 2, title: "Title 2"},
  {id: 3, title: "Title 3"},
];

function App() {
  return (
    <div className="wrapper">
      <h1>React demo</h1>
      <TodoList items={Todos}/>
    </div>
  );
}

export default App;
