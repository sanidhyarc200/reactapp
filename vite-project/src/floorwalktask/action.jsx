// actions.js

// Action Types
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const FILTER_TODOS_BY_DATE = 'FILTER_TODOS_BY_DATE';

// Action Creators
export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const updateTodo = (todo) => ({
  type: UPDATE_TODO,
  payload: todo,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const filterTodosByDate = (date) => ({
  type: FILTER_TODOS_BY_DATE,
  payload: date,
});
