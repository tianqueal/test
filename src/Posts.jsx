import { useEffect, useState } from 'react';
import './Posts.css';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <main>
      <h2>Posts</h2>
      <section>
        {posts.map((post) => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
