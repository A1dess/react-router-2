import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import dead from './Posts.module.css';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setError("");
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
      <div className={dead.from}>
      {loading || !posts.length
        ? "loading..."
        : posts.map((el) => {
            return (
              <div key={el.id} className={dead.content}>
                <h1 className={dead.nav}>{el.id} <br /> {el.title}
                 <button onClick={() => navigate(`/posts/${el.id}`)}>Details</button></h1>
                 <div className={dead.ser}> <div className={dead.text}>{el.body}</div>
                <Link to={`/posts/${el.id}`}> More... </Link> </div>
              </div>
            );
          })}
    </div>
  );
};

export default Posts;