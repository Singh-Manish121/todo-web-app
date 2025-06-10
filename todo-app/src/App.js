import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

const API_URL = 'http://localhost:5000/todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.error('Error fetching todos:', err));
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };
  const addTodo = (text) => {
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: text })
    })
    .then(res => res.json())
    .then(newTodo => setTodos([...todos, newTodo]))
    .catch(err => console.error('Add failed:', err));
  };

  const deleteTodo = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    })
    .then(() => setTodos(todos.filter(todo => todo.id !== id)))
    .catch(err => console.error('Delete failed:', err));
  };

  const updateTodo = async (id, newText) => {
  try {
    const response = await fetch(`http://localhost:5000/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: newText }),
    });

    if (!response.ok) {
      throw new Error('Failed to update todo');
    }

    fetchTodos();
  } catch (error) {
    console.error('Error updating todo:', error);
  }
};


  return (
       
    <div className="app-container">
      <h1>TODO App</h1>
      <TodoForm onAdd={addTodo} />
      <h2>My TODOs</h2>
      
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onUpdate={updateTodo}
      />
    </div>
  );
}

export default App;
