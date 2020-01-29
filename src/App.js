import React from 'react';
import TodoList from "./Todo/TodoList";
import Context from "./context";

function App() {
    const [Todos, updateTodos] = React.useState([
        {id: 1, title: "Title 1", completed: false},
        {id: 2, title: "Title 2", completed: true},
        {id: 3, title: "Title 3", completed: false},
    ]);

    function toggleTodo(id) {
        updateTodos(Todos.map(todo => {
            if (todo.id === id) todo.completed = !todo.completed;
            return todo;
        }));
    }
    function removeTodo(id) {
        updateTodos(Todos.filter(todo => todo.id !== id));
    }

    return <Context.Provider value={{toggleTodo, removeTodo}}>
        <div className="wrapper">
            <h1>React demo</h1>
            <TodoList items={Todos}/>
        </div>;
    </Context.Provider>
}

export default App;
