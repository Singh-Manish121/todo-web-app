
const API_BASE = "http://localhost:5000/todos";

export const fetchTodos = async () => {
  const res = await fetch(API_BASE);
  return await res.json();
};

export const createTodo = async (todo) => {
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  return await res.json();
};

export const updateTodo = async (id, updates) => {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
  return await res.json();
};

export const deleteTodo = async (id) => {
  await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
};
