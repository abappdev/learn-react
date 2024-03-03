// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'


function App() {
  const [todos, setTodos] = useState([{
    title: "Goto gym",
    discription: "Goto gym 7-8.30 AM",
    is_completed: false
  }, {
    title: "Morning work",
    discription: "Bath and breakfast 8.30 to 9.15 AM",
    is_completed: true
  }, {
    title: "Login for work",
    discription: "9.15 AM",
    is_completed: false
  }]);

  return (
    <div>
      {JSON.stringify(todos)}
      {/* <TodoItem title="Hello" ></TodoItem> */}
    </div>
  )
}

function TodoItem(props) {
  //   function onClickHandler() {
  //     props.setCount(p rops.count + 1);
  //   }
  return (<div>
    <h1>{props.title}</h1>
    <h2>{props.discription}</h2>
    <h3>{props.is_completed}</h3>
  </div>)
}

export default App