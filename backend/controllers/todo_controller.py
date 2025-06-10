from flask import Blueprint, request, jsonify
from sevices.todo_service import get_all_todos, create_todo, update_todo, delete_todo


todo_bp = Blueprint('todo_bp', __name__)

@todo_bp.route("/")
def index():
    return "Flask backend is running!"

@todo_bp.route('/todos', methods=['GET'])
def get_todos():
    todos = get_all_todos()
    return jsonify([{'id': t.id, 'text': t.text} for t in todos])

@todo_bp.route('/todos', methods=['POST'])
def add_todo():
    data = request.json
    new_todo = create_todo(data['text'])
    return jsonify({'id': new_todo.id, 'text': new_todo.text})

@todo_bp.route('/todos/<int:id>', methods=['PUT'])
def edit_todo(id):
    data = request.json
    updated = update_todo(id, data['text'])
    return jsonify({'id': updated.id, 'text': updated.text})

@todo_bp.route('/todos/<int:id>', methods=['DELETE'])
def remove_todo(id):
    delete_todo(id)
    return jsonify({'message': 'Todo deleted successfully'})
