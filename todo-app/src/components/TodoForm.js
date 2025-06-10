import React, { useState } from 'react';

function TodoForm({ onAdd }) {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() === '') return;
    onAdd(todoText.trim());
    setTodoText('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={todoText}
        onChange={e => setTodoText(e.target.value)}
        placeholder="Add a new todo..."
      />
      <button className="add-button" type="submit">Add</button>

    </form>
  );
}

export default TodoForm;

