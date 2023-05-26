// reducer.js

const initialState = {
    todos: []
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, action.payload]
        };
      case 'UPDATE_TODO':
        return {
          ...state,
          todos: state.todos.map(todo => {
            if (todo.id === action.payload.id) {
              return {
                ...todo,
                text: action.payload.text
              };
            }
            return todo;
          })
        };
      case 'DELETE_TODO':
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;
  