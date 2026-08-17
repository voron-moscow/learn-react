import type { Todo } from "./types";
import { useState } from "react";

import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  onAddTodo: (text:Todo["text"]) => void;
  onDeleteTodo: (id: Todo["id"]) => void;
  onToggleTodo: (id: Todo["id"]) => void;
};

function TodoList({ todos, onAddTodo, onDeleteTodo, onToggleTodo }: TodoListProps) {
  const [input, setInput] = useState('');

  function handleAddTodo() {
    if (input.trim() === "") return;

    onAddTodo(input);
    setInput('');
  }

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
        placeholder="Введите название задачи"
      />
      <button onClick={handleAddTodo}>Добавить</button>

      {todos.length === 0 ? (
        <p>На данный момент нет задач</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDeleteTodo={onDeleteTodo}
              onToggleTodo={onToggleTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
