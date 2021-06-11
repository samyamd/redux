export const setposts = (posts) => {
    return {
        type: 'SET_POST',
        payload: posts
    }
}

export const selectedposts = (post) => {
  return {
    type: "SELECTED_POST",
    payload: post,
  };
};

// export const removeProducts = (products) => {
//   return {
//     type: "REMOVE_PRODUCT",
//     payload: products,
//   };
// };