import { useState } from "react";
import "./styles.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e){
    e.preventDefault();
    // prevents refreshing the page every time

    setTodos((currTodos) => {
      return[
        ...currTodos,
        {id: crypto.randomUUID(), title: newItem, completed: false}
      ];
    });

    setNewItem("");
  };

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
    <form
    onSubmit={handleSubmit}
     className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input 
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
         type="text" id="item" />
        <button className="btn">Add</button>
      </div>
    </form>

    <h1 className="header">TO-DO List</h1>

    <ul className="list">
      {todos.length === 0 && "NO TO-DOS"}
      {todos.map((todo) => {
        return(
          <li key={todo.id}>
          <label>
            <input 
            type="checkbox" 
            checked={todo.completed}
            onChange={(e) => toggleTodo(todo.id, e.target.checked)}/>
            {todo.title}
          </label>
          <button 
          onClick={() => deleteTodo(todo.id)}
          className="btn btn-danger">Delete</button>
          {/* deteleTodo is after a calback function beacuse without callback it will automatically delete the todos without get checked */}

          {/* () => --> callback function is used to get onclick then it will call the deleteTodo without callback it will delete the todos binna click kiye */}
      </li>
        )})}
    </ul>
    </>
  );
};
