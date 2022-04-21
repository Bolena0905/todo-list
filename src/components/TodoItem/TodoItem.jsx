import React from "react";

//css
import "./TodoItem.css";

function TodoItem(props) {
    const { todo, index, completeTodo, removeTodo } = props;

    // const todoText = `TODO: ${todo.text}`;
    
    return (
    <div className= {`todo ${todo.isCompleted ? "complete" : ""}`}>
        {todo.text} 
        <div>
            <button onClick={() => completeTodo(index)}> Complete</button>
            <button onClick={() => removeTodo(index)}> x </button>
        </div>
    </div>
    );

};



export default TodoItem;
