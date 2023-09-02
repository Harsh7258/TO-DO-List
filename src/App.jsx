import { useState, useEffect } from "react";
import { TodoFrom } from "./TodoForm";
import { TodoList } from "./TodoList";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return [];

    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos]);

  function addTodo(title){
    setTodos((currTodos) => {
      return[
        ...currTodos,
        {id: crypto.randomUUID(), title, completed: false}
      ];
    });
  }

  function toggleTodo(id, completed){
    setTodos((currTodos) => {
      return currTodos.map((toDo) => {
        if(toDo.id === id){
          return {...toDo, completed}
        }
      });
    });
  };

  function deleteTodo(id){
    setTodos((currTodos) => {
      return currTodos.filter((todo) => todo.id !== id)
    });
  };

  return (
    <> 
    <TodoFrom compProp={addTodo}/>

    <h1 className="header">TO-DO List</h1>

    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  );
};
