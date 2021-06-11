import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setposts } from "../actions";
import { Link } from "react-router-dom";

export default function Login() {
  const posts = useSelector((state) => state.allPosts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const res = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => console.log(err));
      dispatch(setposts(res.data));
    })();
    return () => {};
  }, []);

  return (
    <div className="container my-3">
      {posts?.length}
      <div className="row">
        {posts.map((post) => (
          <div className="col-sm-4" key={post.id}>
            <div className="card">
              <div className="card-header">
                <img
                  className="card-img-top"
                  src={post.image}
                  alt="Card image"
                  height={300}
                />
              </div>
              <div className="card-body">
                <Link to={`post/${post.id}`}>
                  <h4 className="text-center">{post.title}</h4>
                </Link>
                <div className="row">
                  <div className="col-sm-6">
                    <h5>Price: £ {post.price}</h5>
                  </div>
                  <div className="col-sm-6 text-right">
                    <h5>{post.category}</h5>
                  </div>
                </div>
                <p>{post.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
