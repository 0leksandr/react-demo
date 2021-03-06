import React, {useEffect} from 'react';
import Context from "./context";
import TodoList from "./Todo/TodoList";
import AddTodo from "./Todo/AddTodo";

function App() {
    const [Todos, updateTodos] = React.useState([]);

    useEffect(
        () => {
            fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
                .then(response => new Promise(resolve => setTimeout(() => resolve(response), 3000)))
                .then(response => response.json())
                .then(json => updateTodos(json));
        },
        []
    );

    function toggleTodo(id) {
        updateTodos(Todos.map(todo => {
            if (todo.id === id) todo.completed = !todo.completed;
            return todo;
        }));
    }
    function removeTodo(id) {
        updateTodos(Todos.filter(todo => todo.id !== id));
    }
    function addTodo(text) {
        updateTodos(Todos.concat([{
            id: Math.max(...Todos.map(todo => todo.id)) + 1,
            title: text,
            completed: false,
        }]));
    }

    return <Context.Provider value={{addTodo, toggleTodo, removeTodo}}>
        <div className="wrapper">
            <h1>React demo</h1>
            <TodoList items={Todos}/>
            <AddTodo/>
        </div>;
    </Context.Provider>
}

export default App;
