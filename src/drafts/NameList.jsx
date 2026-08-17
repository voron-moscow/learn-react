import { useState } from "react";

function NameList({ names, onAdd, onDelete }) {
  const [input, setInput] = useState("");

  function handleAdd() {
    if (input.trim() === "") return;

    onAdd(input);
    setInput("");
  }

  return (
    <div>
      <h2>Список имён</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Введите имя"
      />
      <button onClick={handleAdd}>Добавить</button>

      {names.length === 0 ? (
        <p>Пока никого нет. Добавьте первое имя.</p>
      ) : (
        <ul>
          {names.map((item) => (
            <li key={item.id}>
              {item.text} <button onClick={() => onDelete(item.id)}>Удалить</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NameList;
