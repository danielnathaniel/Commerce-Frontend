import { BASE_URL } from "../utils/api";

// const ApiProductList = () => {
//   let response = fetch(`${BASE_URL}/products`, {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   }).then((response) => console.log(response.json()));
// };

const ApiProductList = async (callback) => {
  //   await fetch(`${BASE_URL}/api/products/`) // return this promise
  //     .then((response) => response.json())
  //     .then((json) => json.results);
  let response = await fetch(`${BASE_URL}/api/products/`);
  //   let allProductsData = () => {
  //     return fetch(`${BASE_URL}/api/products/`);
  //   };
  //use string literals
  console.log(response);
  let allProducts = response.json();
  return {data: allProducts};
};

export default ApiProductList;
