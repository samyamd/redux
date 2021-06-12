import axios from "axios";
const url = "https://fakestoreapi.com/";

// const getProducts =async (method, endpoint, header, data) => {
//     await api(method, endpoint, header, data);
// }

export const api = async (method, endpoint, header, data) => {
  const res = await axios({
    method,
    url: url+endpoint,
    headers: header,
    data: data
  });
  return res
};

