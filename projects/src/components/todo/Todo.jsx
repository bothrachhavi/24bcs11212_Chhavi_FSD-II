import React, { useRef, useState } from 'react'

const Todo = () => {
  const [message, setMessage] = useState("");
  const [todos, setTodos] = useState([]);
  const todo = useRef(null);

  const addTodo = () => {
    const text = todo.current.value;

    if(text === "") {
      setMessage("Todo is required");
    } else {
      setTodos([...todos, text]);
    }

    todo.current.value = "";

    setTimeout(() => {
      setMessage("");
    }, 2000);
  }

  const deleteTodo = (ind) => {
    const newTodos = todos.filter((todo, index) => index !== ind);
    setTodos(newTodos);
  }

  return (
    <main className='container'>
      <div className='box'>
        <h2 className='heading'>Todo List {todos.length > 0 ? `(${todos.length})` : ""}</h2>

        <div className='flex gap-3'>
          <input ref={todo} className='border-2 border-gray-300 rounded-md p-2' type="text" name="todo" id="todo" placeholder='Add a new todo' />
          <button className='bg-blue-500 border-blue-900 btn' onClick={() => addTodo()}>Add</button>
        </div>

        {message && (
            <p className='text-red-500'>{message}</p>
          )}
        
        <div className='flex flex-col gap-2'>
          {todos.map((todo, ind) => (
            <div className='flex gap-2' key={ind}>
              <p className='card'>{todo}</p>
              <button className='bg-red-500 px-2 border-red-900 border-3 btn' onClick={() => deleteTodo(ind)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Todo