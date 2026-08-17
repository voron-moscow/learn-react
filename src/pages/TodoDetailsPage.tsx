import { useState, type FormEvent } from "react";
import { useParams, Link } from "react-router";
import type { Todo } from "../types";
import { useTodoContext } from "../TodoContext";

function TodoEditForm({
  todo,
  onEdit,
}: {
  todo: Todo;
  onEdit: (id: Todo["id"], text: Todo["text"]) => void;
}) {
  const [draft, setDraft] = useState(todo.text);
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (draft.trim() === "") {
      setError("Название не может быть пустым");
      return;
    }

    setError("");
    onEdit(todo.id, draft);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={draft}
        onChange={(e) => {
          setDraft(e.target.value);
          setError("");
        }}
      />
      {error !== "" && <p>{error}</p>}
      <button type="submit">Сохранить</button>
    </form>
  );
}

function TodoDetailsPage() {
  const { todos, handleToggleTodo, handleEditTodo } = useTodoContext();
  const { id } = useParams();
  const idParam = Number(id);

  if (isNaN(idParam)) return <p>Некорректный id</p>;

  const todo = todos.find((item) => item.id === idParam);

  if (!todo) {
    return (
      <div>
        <p>Задача не найдена</p>
        <Link to="/todos">К списку</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Задача #{todo.id}</h1>
      <TodoEditForm todo={todo} onEdit={handleEditTodo} />
      <p>Статус: {todo.completed ? "Выполнено" : "Не выполнено"}</p>
      <button onClick={() => handleToggleTodo(todo.id)}>Переключить статус</button>
      <p>
        <Link to="/todos">← К списку</Link>
      </p>
    </div>
  );
}

export default TodoDetailsPage;
