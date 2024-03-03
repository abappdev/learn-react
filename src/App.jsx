// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'


function App() {
  const [todos, setTodos] = useState([{
    title: "Goto gym",
    description: "Goto gym 7-8.30 AM",
    is_completed: false
  }, {
    title: "Morning work",
    description: "Bath and breakfast 8.30 to 9.15 AM",
    is_completed: true
  }, {
    title: "Login for work",
    description: "9.15 AM",
    is_completed: false
  }]);


  function addTodo() {
    setTodos([...todos, {
      title: "new todo",
      description: "This is a new Todo",
      is_completed: false
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add randomly</button>
      <TodoItem todos={todos} />
    </div>
  );
}

function TodoItem(props) {
  return (
    <div>
      {props.todos.map(function (todo) {
        return (<ToDo todo={todo} />)
      })}
    </div>
  );
}

function ToDo(props) {
  return (<div style={{ backgroundColor: "grey", padding: "1rem", margin: "1rem", width: "50rem", borderRadius: "1rem" }}>
    ----------------------------------------------------------------------------------------------------
    <h1 style={{ color: "white" }}>Title: {props.todo.title}</h1>
    <h4>Description: {props.todo.description}</h4>
    <h3>{props.todo.is_completed}</h3>
  </div>);
}

export default App