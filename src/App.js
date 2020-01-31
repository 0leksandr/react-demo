import React, {useEffect} from 'react';
import Context from "./context";
import TodoList from "./Todo/TodoList";
import AddTodo from "./Todo/AddTodo";

function App() {
    const [Todos, updateTodos] = React.useState([
        {id: 1, title: "Title 1", completed: false},
        {id: 2, title: "Title 2", completed: true},
        {id: 3, title: "Title 3", completed: false},
    ]);

    useEffect(
        () => {
            fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
                .then(response => response.json())
                .then(json => {
                    console.log(json);
                    updateTodos(json);
                });
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
