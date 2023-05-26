import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, updateTodo, deleteTodo } from '../action';
import Pagination from './pagination';
import TodoFilter from './tododatefilter';

const TodoListFW = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState('');
  const [currentTodoId, setCurrentTodoId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredTodos, setFilteredTodos] = useState(null); // State for filtered todos
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const todosPerPage = 5;

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;

  // Use filtered todos if available, otherwise use the original todos
  const currentTodos = filteredTodos || todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const totalPages = Math.ceil(todos.length / todosPerPage);

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentTodoId) {
      dispatch(
        updateTodo({
          id: currentTodoId,
          text: newTodo,
        })
      );
      setCurrentTodoId(null);
    } else {
      dispatch(
        addTodo({
          id: Date.now(),
          text: newTodo,
          date: new Date().toISOString().split('T')[0], // Assign the current date to the new todo
        })
      );
    }
    setNewTodo('');
  };

  const handleEdit = (id, text) => {
    setCurrentTodoId(id);
    setNewTodo(text);
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleFilterByDate = (selectedDate) => {
    const filteredTodos = todos.filter((todo) => {
      // Assuming each todo object has a "date" property representing the date it was assigned
      // Adjust the property name accordingly based on your data structure
      const todoDate = new Date(todo.date).toISOString().split('T')[0]; // Extract the date part

      return todoDate === selectedDate;
    });

    setFilteredTodos(filteredTodos);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setFilteredTodos(
      todos.filter((todo) => {
        return todo.text.toLowerCase().includes(e.target.value.toLowerCase());
      })
    );
  };

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <h2 className="my-4">Todo List</h2>
      <div className="row mb-4">
        <div className="col">
          <TodoFilter onFilter={handleFilterByDate} /> {/* Pass handleFilterByDate as the onFilter prop */}
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Search Todos"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={newTodo}
                onChange={handleChange}
                placeholder="Enter a new todo"
                required
              />
              <button type="submit" className="btn btn-primary">
                {currentTodoId ? 'Update Todo' : 'Add Todo'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        {currentTodos.map((todo) => (
          <div key={todo.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{todo.text}</h5>
                <p className="card-text">
                  Date: {new Date(todo.date).toLocaleDateString()}
                </p>
                <button
                  onClick={() => handleEdit(todo.id, todo.text)}
                  className="btn btn-sm btn-outline-primary me-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="btn btn-sm btn-outline-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        todos={filteredTodos || todos} // Use filtered todos if available, otherwise use the original todos
        todosPerPage={todosPerPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default TodoListFW;
