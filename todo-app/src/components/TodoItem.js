import React from 'react';

const TodoItem = ({ todo, onDelete, onEdit }) => {
  return (
    <div className="todo-item">
      <span>{todo.text}</span>
      <div>
        <button onClick={() => onEdit(todo)}>Edit</button>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
