import { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        if (!response.ok) {
          throw new Error("Не удалось загрузить посты");
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  if (loading) return <p>Загрузка постов...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div>
      <h2>Посты с сервера</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
