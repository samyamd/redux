import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectedposts } from "../actions";

export default function SinglePost() {
  const [loader, setLoader] = useState(true);
  const state = useSelector((state) => state.allPosts);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const res = await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .catch((err) => console.log(err));
      dispatch(selectedposts(res.data));
      setLoader(state.loading);
    })();
    return () => {
      // cleanup
    };
  }, []);
  return loader ? (
    <div className="text-center d-block">
      <div className="spinner-border text-primary"></div>
    </div>
  ) : (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <img src={state.image} alt={state.title} height={500} />
        </div>
        <div className="col-sm-6">
          <h1>{state.title}</h1>
          <p>Price: £ {state.price}</p>
          <p>Category: {state.category}</p>
          <p>{state.description}</p>
        </div>
      </div>
      {/* {state} */}
    </div>
  );
}
