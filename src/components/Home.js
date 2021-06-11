import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Home() {
  const posts = useSelector((state) => state.allPosts);

  return (
    <div>
      <p className="h4">Total Products: {posts?.posts?.length}</p>
      <p className="h4">
        Recent View:
        <Link to={`/post/${posts.id}`}>{posts?.title}</Link>
      </p>
    </div>
  );
}
