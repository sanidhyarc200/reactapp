import InputBox from "./inputboxtodoc";

import { EditTodo } from "./edittodoc";
import { Button } from "./buttoncomp";
const TodoItem = ({
  item,
  editingTodo,
  newTodoTitle,
  setNewTodoTitle,
  updateTodo,
  onEditTodo,
  onDeleteTodo,
}) => {
  if (item.id === editingTodo) {
    return (
      <EditTodo
        onEditTodo={onEditTodo}
        newTodoTitle={newTodoTitle}
        setNewTodoTitle={setNewTodoTitle}
        updateTodo={updateTodo}
      />
    );
  }

  return (
    <li>
      <div>
        <p>{item.title}</p>
        {/* <Button onClick={(e) => console.log(e)} label={"Test"} /> */}
        <Button onClick={() => onDeleteTodo(item.id)} label={"Delete"} />
        <Button onClick={() => onEditTodo(item)} label={"Edit"} />
      </div>
    </li>
  );
};

export default TodoItem;