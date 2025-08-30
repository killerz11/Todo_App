import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Buy groceries', completed: false, createdAt: new Date() },
    { id: 2, text: 'Learn MERN', completed: true, createdAt: new Date() },
  ])
  const [newTodo, setnewTodo] = useState("");

  const addTodo = () => {
    if(!newTodo.trim()) return;
    const todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
      createdAt: new Date()
    }
    setTodos([...todos, todo]);
    setnewTodo("");
  }

  const toggleTodos = (id) => {
    setTodos(todos.map( todo => 
      todo.id == id ? {...todo, completed: !todo.completed}: todo
    ))
  }

  return (
    <div>
      <h1>Todo App</h1>
      <div>
          <input type='text' 
                 value={newTodo}
                 onChange={(e) => setnewTodo(e.target.value)}
                 placeholder='Enter Todo'
          />
          <button onClick={addTodo}>addTodo</button>
      </div>
      <div>
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text} - {todo.completed ? 'completed' : 'not-completed'} - {todo.createdAt.toLocaleDateString()}
            <button onClick={() => toggleTodos(todo.id)}>Status</button>
          </li>
        ))}
      </ol>
      </div>
    </div>
  )
}

export default App
