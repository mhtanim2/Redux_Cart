import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, calculatePrice } from "../Redux/Slice/cartSlice";
import { fetchProducts, STATUSES } from "../Redux/Slice/productSlice";
import ProductCard from "./ProductCard";

const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  const addHandler = (item) => {
    dispatch(addToCart(item));
    dispatch(calculatePrice());
  };

  return (
    <div className="productList">
      {products.map((item, i) => (
        <ProductCard
          key={item.id}
          id={item.id}
          img={item.image}
          title={item.title}
          price={item.price}
          handler={addHandler}
        />
      ))}
    </div>
  );
};

export default Product;
