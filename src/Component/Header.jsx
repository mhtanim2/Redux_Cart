import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const data=useSelector(state=>state.cart.value);
  return (
    <nav>
      <h1>Shopping</h1>
      <div className="paths">
        <Link to={"/home"}>Home </Link>
        <Link to={"/product"}>Product</Link>
        <Link to={"/card"}>
          <FiShoppingBag />
          <p>{data.length}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
