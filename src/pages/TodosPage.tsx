import { useSearchParams } from "react-router";

import { useTodoContext } from "../TodoContext";

import TodoList from "../TodoList.jsx";
import TodoStats from "../TodoStats.jsx";

function TodosPage() {
  const { todos, handleAddTodo, handleDeleteTodo, handleToggleTodo } = useTodoContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter") || "all";

  const visibleTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "done") return todo.completed;
    return true;
  });

  return (
    <div>
      <h1>Задачи</h1>
      <TodoStats todos={todos} />
      <div>
        <button
          onClick={() => setSearchParams({ filter: "all" })}
          style={{ fontWeight: filter === "all" ? "bold" : "normal" }}
        >
          Все
        </button>
        <button
          onClick={() => setSearchParams({ filter: "active" })}
          style={{ fontWeight: filter === "active" ? "bold" : "normal" }}
        >
          Активные
        </button>
        <button
          onClick={() => setSearchParams({ filter: "done" })}
          style={{ fontWeight: filter === "done" ? "bold" : "normal" }}
        >
          Готово
        </button>
      </div>
      <TodoList
        todos={visibleTodos}
        onAddTodo={handleAddTodo}
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleToggleTodo}
      />
    </div>
  );
}

export default TodosPage;
