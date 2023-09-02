export function TodoItem({completed, id, title, toggleTodo, deleteTodo}){
    return(
        <li>
          <label>
            <input 
            type="checkbox" 
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}/>
            {title}
          </label>
          <button 
          onClick={() => deleteTodo(id)}
          className="btn btn-danger">Delete</button>
          {/* deteleTodo is after a callback function beacuse without callback it will automatically delete the todos without get checked */}

          {/* () => --> callback function is used to get onclick then it will call the deleteTodo without callback it will delete the todos binna click kiye */}
      </li>
    )
}