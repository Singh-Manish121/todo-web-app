from models.todo_model import Todo
from db.connection import db

def get_all_todos():
    return Todo.query.all()

def create_todo(text):
    new_todo = Todo(text=text)
    db.session.add(new_todo)
    db.session.commit()
    return new_todo

def update_todo(id, text):
    todo = Todo.query.get_or_404(id)
    todo.text = text
    db.session.commit()
    return todo

def delete_todo(id):
    todo = Todo.query.get_or_404(id)
    db.session.delete(todo)
    db.session.commit()
