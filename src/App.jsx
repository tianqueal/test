import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
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
      <h1>Posts</h1>
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

export default App;

/* import { Component } from "react";

export default class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    await this.getPosts();
  }

  getPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      this.setState({ posts: data });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { posts } = this.state;
    return (
      <main>
        <h1>Posts</h1>
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
} */
