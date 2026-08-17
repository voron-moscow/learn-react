import type { Todo } from "./types";

type TodoStatsProps = {
  todos: Todo[];
};

function TodoStats({ todos }: TodoStatsProps) {
    const todosAll = todos.length;
    const todosCompleted = todos.filter((todo) => todo.completed).length;
  return (
    <div>
      <p>Всего задач: {todosAll}, из них выполнено: {todosCompleted}</p>
    </div>
  );
}

export default TodoStats;