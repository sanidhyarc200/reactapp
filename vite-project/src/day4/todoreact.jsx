import { useState } from "react";

const TodoApp = () => {
  // Define state for todo title
  const [todoTitle, setTodoTitle] = useState("");

  // Define state for Todos
  const [todos, setTodos] = useState([]);

  // Method to add todo into list
  const handleAddTodo = () => {
    if (!todoTitle) {
      return alert("Please enter a todo title");
    }

    // Update the todo
    setTodos((lastState) => [...lastState, todoTitle]);
    setTodoTitle("");

    // Second way -> it may create stale closure issue with async to multi state
    //setTodos([...todos, todoTitle]);
  };

  // Define return for JSX
  return (
    <>
      <div>
        <input
          value={todoTitle}
          type="text"
          placeholder="Enter todo title"
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <div>
        <h1>My Todos</h1>
        <ul>
          {todos.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default TodoApp;
