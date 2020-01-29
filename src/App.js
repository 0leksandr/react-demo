import React from 'react';
import TodoList from "./Todo/TodoList";

function App() {
    const [Todos, updateTodos] = React.useState([
        {id: 1, title: "Title 1", completed: false},
        {id: 2, title: "Title 2", completed: true},
        {id: 3, title: "Title 3", completed: false},
    ]);

    function toggle(todoId) {
        updateTodos(Todos.map(todo => {
            if (todo.id === todoId) todo.completed = !todo.completed;
            return todo;
        }));
    }

    return <div className="wrapper">
        <h1>React demo</h1>
        <TodoList items={Todos} toggle={toggle}/>
    </div>;
}

export default App;
