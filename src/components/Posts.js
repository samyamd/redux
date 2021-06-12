import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { errorProducts, readyProduct, setposts } from "../actions";
import { Link } from "react-router-dom";
import { api } from "../helper/apiCalls";

export default function Login() {
  const fetchPosts = useSelector((state) => state.allPosts);
  console.log(fetchPosts);
  const { loading, posts, error } = fetchPosts;
  const dispatch = useDispatch();

  const getProducts = async () => {
    try {
      dispatch(readyProduct());
      const res = await api("get", "products", null, null);
      dispatch(setposts(res.data));
      // AsyncStorage()
    } catch (error) {
      dispatch(errorProducts(error));
    }
  };

  useEffect(() => {
    if (posts?.length > 0) {
      return;
    }
    getProducts();

    return () => {};
  }, []);

  return loading ? (
    <div className="text-center d-block">
      <div className="spinner-border text-primary"></div>
    </div>
  ) : error ? (
    <h2>{error.message}</h2>
  ) : (
    <div className="container my-3">
      {posts?.length}
      <div className="row">
        { posts && posts.map((post) => (
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
