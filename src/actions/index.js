export const readyProduct = () => {
    return {
        type: 'READY_PRODUCT',
    }
}
export const setposts = (posts) => {
  return {
        type: 'SET_POST',
        payload: posts
    }
}

export const selectedposts = (post) => {
  localStorage.setItem(
    "selected",
    JSON.stringify(post)
  );
  return {
    type: "SELECTED_POST",
    payload: post,
  };
};

export const errorProducts = (error) => {
  return {
    type: "ERROR_PRODUCT",
    payload: error,
  };
};