import { Link } from "react-router";
import type { Todo } from "./types";

type TodoItemProps = {
  todo: Todo;
  onDeleteTodo: (id: Todo["id"]) => void;
  onToggleTodo: (id: Todo["id"]) => void;
};

function TodoItem({ todo, onDeleteTodo, onToggleTodo }: TodoItemProps) {
  return (
    <li>
      <span
        onClick={() => onToggleTodo(todo.id)}
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>{" "}
      {todo.completed ? "(Выполнено)" : "(Не выполнено)"}{" "}
      <Link to={`/todos/${todo.id}`}>Открыть</Link>{" "}
      <button onClick={() => onDeleteTodo(todo.id)}>Удалить</button>
    </li>
  );
}

export default TodoItem;
