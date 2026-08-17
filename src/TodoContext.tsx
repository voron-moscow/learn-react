import { createContext, useContext, type ReactNode } from "react";
import type { Todo } from "./types";
import useTodos from './useTodos';

type TodoContextValue = {
  todos: Todo[];
  handleAddTodo: (text: Todo["text"]) => void;
  handleEditTodo: (id: Todo["id"], text: Todo["text"]) => void;
  handleDeleteTodo: (id: Todo["id"]) => void;
  handleToggleTodo: (id: Todo["id"]) => void;
};

const TodoContext = createContext<TodoContextValue | null>(null);

export function TodoProvider ({children}: {children: ReactNode}) {
    const value = useTodos();

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

export function useTodoContext() {
    const context = useContext(TodoContext);

    if (!context) {
        throw new Error("useTodoContext must be used inside TodoProvider");
    }

    return context;
}