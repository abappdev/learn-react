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
      {todos.map(function (todo) {
        return <TodoItem title={todo.title} description={todo.description} />;
      })}
    </div>
  );
}

function TodoItem(props) {
  return (
    <div>
      <h1>hi {props.title}</h1>
      <h2>{props.description}</h2>
      {/* <h3>{props.is_completed}</h3> */}
    </div>
  );
}

export default App