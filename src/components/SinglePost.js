import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { errorProducts, readyProduct, selectedposts } from "../actions";
import { api } from "../helper/apiCalls";

export default function SinglePost() {
  const {selected, loading, error} = useSelector((state) => state.allPosts);
  const state = selected;
  const { id } = useParams();
  const dispatch = useDispatch();

  const getProduct = async () => {
    dispatch(readyProduct());
        try {
          const res = await api("get", `products/${id}`, null, null);
          dispatch(selectedposts(res.data));
        } catch (error) {
          dispatch(errorProducts(error));
        }
      }

  useEffect(() => {
    if (id != state?.id) {
      console.log('if');
      getProduct()
    }
    return () => {
      // cleanup
    };
  }, []);
  return loading ? (
    <div className="text-center d-block">
      <div className="spinner-border text-primary"></div>
    </div>
  ) : error ? <h2>{error}</h2> : (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <img src={state?.image} alt={state?.title} height={500} />
        </div>
        <div className="col-sm-6">
          <h1>{state?.id}</h1>
          <h1>{state?.title}</h1>
          <p>Price: £ {state?.price}</p>
          <p>Category: {state?.category}</p>
          <p>{state?.description}</p>
        </div>
      </div>
      {/* {state} */}
    </div>
  );
}
