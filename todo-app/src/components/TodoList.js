import React, { useState } from 'react';
import './TodoList.css';

function TodoList({ todos, onDelete, onUpdate }) {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const handleUpdate = (id) => {
    if (editText.trim()) {
      onUpdate(id, editText);
      setEditingId(null);
    }
  };

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          <div className="todo-content">
            <div className="todo-left">
              {editingId === todo.id ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleUpdate(todo.id)}
                />
              ) : (
                <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                  {todo.text}
                </span>
              )}
            </div>
            <div className="todo-actions">
              {editingId === todo.id ? (
                <button className="edit-btn" onClick={() => handleUpdate(todo.id)}>💾</button>
              ) : (
                <button className="edit-button" onClick={() => handleEdit(todo)}>✏️</button>
              )}
              <button className="delete-btn" onClick={() => onDelete(todo.id)}>❌</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
