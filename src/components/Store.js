import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//component
import Product from "./shared/Product";
import Loader from "./shared/Loader"

//redux
import { fetchProducts } from "../redux/products/productsAction";

const Store = () => {

  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState);

  useEffect(() => {
   if (!productsState.products.length) dispatch(fetchProducts())
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {productsState.loading ? (
        <Loader />
      ) : productsState.error ? (
        <p>Something went wrong</p>
      ) : (
        productsState.products.map((product) => (
          <Product key={product.id} productData={product} />
        ))
      )}
    </div>
  );
};

export default Store;
