import { useState } from "react";

// components
import TodoItem from "./components/TodoItem/TodoItem";
import TodoForm from "./components/TodoForm/TodoForm";

//css
import "./App.css";

function App() {
  // State
  const [todos, setTodos] = useState([
    { text:"Learn React", isCompleted: false },
    { text:"Meet friends", isCompleted: false },
    { text:"Buid React", isCompleted: false },
  ]);

// actions

  // do something
// What it would it would like if you did not add the three dots before todos
    // [["something", "something else"], "some todo"]
    // With the three dots also called the spread operator 
    // ["something", "something else", "some todo"]

const addTodo = (text) => {
  const newTodos = [...todos, { text: text, isCompleted: false }];
  setTodos(newTodos);
};


const completeTodo = (index) => {
  const newTodos = [...todos];
  newTodos[index].isCompleted =  true;
  setTodos(newTodos);
};

const removeTodo = (index) => {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos);
}



  return (
    <div className="app">
      <div className="todo-list">
        <h1> My todo list</h1>
        {todos.map((todo, index) => (
          <TodoItem 
          todo={todo} 
          key={index} 
          index={index}
          completeTodo={completeTodo}
          removeTodo = {removeTodo}
          />
         ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
