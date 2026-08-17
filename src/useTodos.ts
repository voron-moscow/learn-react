import { useState, useEffect } from "react";
import type { Todo } from "./types";

function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("todos");
    return saved ? (JSON.parse(saved) as Todo[]) : [];
  });

  const [nextId, setNextId] = useState<number>(() => {
    const saved = localStorage.getItem("nextId");
    return saved ? Number(saved) : 1;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("nextId", String(nextId));
  }, [todos, nextId]);

  function handleAddTodo(text: Todo["text"]) {
    setTodos([...todos, { id: nextId, text, completed: false }]);
    setNextId(nextId + 1);
  }
  
  function handleEditTodo(id: Todo["id"], text: Todo["text"]) {
    const nextText = text.trim();
    if (nextText === "") return;

    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: nextText } : todo)));
  }
  
  function handleDeleteTodo(id: Todo["id"]) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleToggleTodo(id: Todo["id"]) {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    );
  }

  return { todos, handleAddTodo,handleEditTodo, handleDeleteTodo, handleToggleTodo };
}

export default useTodos;
