import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { calculatePrice, decrement, increment } from "../Redux/Slice/cartSlice";
import { removeHandler } from "./removeCard";

const Card = () => {
  const { value, subTotal, tax, shipping, total } = useSelector(
    state => state.cart
  );

  const dispatch = useDispatch();
  const myList = value.map((item, i) => {
    return (
      <tr>
        <td>{item.id}</td>
        <td>
          <img className="cartImg" src={item.img} alt="This is product " />
        </td>

        <td>{item.title}</td>
        <td className="qua">
          <button
            onClick={() => {
              dispatch(decrement(item));
              dispatch(calculatePrice());
            }}
          >
            <FiMinus/>
          </button>
          <p>{item.quantity}</p>
          <button
            onClick={() => {
              dispatch(increment(item));
              dispatch(calculatePrice());
            }}
          >
            <FiPlus/>
          </button>
        </td>

        <td>{item.price * item.quantity}</td>

        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              removeHandler(item, i);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <div className="component">
        <table className="table table-bordered " >
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Title</th>
              <th>Quantity</th>
              <th>price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{myList}</tbody>
        </table>
        <aside>
          <h2>Subtotal: ${subTotal.toFixed(2)}</h2>
          <h2>Shipping: ${tax}</h2>
          <h2>Tax: ${shipping}</h2>
          <h2>Total: ${total.toFixed(2)}</h2>
        </aside>
      </div>
    </div>
  );
};

export default Card;

//Manual Multiplication
/* let price = 0;
const length = data.length;
  for (var i = 0; i < length; i++) {
    price += data[i].price * data[i].quantity;
  } */
