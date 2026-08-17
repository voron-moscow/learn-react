import { TodoProvider } from "./TodoContext";

import { Routes, Route, NavLink } from "react-router";

import HomePage from "./pages/HomePage";
import TodosPage from "./pages/TodosPage";
import AboutPage from "./pages/AboutPage";
import TodoDetailPage from "./pages/TodoDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <TodoProvider>
      <div>
        <nav>
          <NavLink to="/" end>
            Главная
          </NavLink>
          {" | "}
          <NavLink to="/todos">Задачи</NavLink>
          {" | "}
          <NavLink to="/about">О проекте</NavLink>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/todos/:id" element={<TodoDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </TodoProvider>
  );
}

export default App;
