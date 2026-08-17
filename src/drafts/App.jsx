import { useState, useEffect } from 'react';

import Hello from '../Hello.jsx';
import Counter from '../Counter.jsx';
import NameList from '../NameList.jsx';
import NameStats from '../NameStats.jsx';
import Posts from '../Posts.jsx';

function App() {
  const [names, setNames] = useState([
    { id: 1, text: "Анна" },
    { id: 2, text: "Игорь" },
    { id: 3, text: "Мария" },
  ]);
  const [nextId, setNextId] = useState(4);

  useEffect(() => {
    document.title = `Имён: ${names.length}`;
  }, [names.length]);

  function handleAdd(text) {
    setNames([...names, { id: nextId, text }]);
    setNextId(nextId + 1);
  }

  function handleDelete(id) {
    setNames(names.filter((item) => item.id !== id));
  }
  
  return (
    <div>
      <h1>Привет, React</h1>
      <p>Это мой первый компонент</p>
      <Hello name="Анна" />
      <Hello name="Игорь" />
      <Counter />
      <Counter />

      <NameStats count={names.length} />
      <NameList names={names} onAdd={handleAdd} onDelete={handleDelete} />

      <Posts />
    </div>
  );
}

export default App;
