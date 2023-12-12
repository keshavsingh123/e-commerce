import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../action/cartAction";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <table className="table table-hover table-primary">
        <thead>
          <tr>
            <th>Image</th>
            <th>Rate</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems &&
            cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.image}
                    style={{
                      width: "35px",
                      height: "35px",
                    }}
                    alt=" "
                  />
                </td>
                <td>{item.rating.rate}</td>
                <td>${item.price}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => dispatch(decrementQuantity(item.id))}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="btn btn-primary"
                    onClick={() => dispatch(incrementQuantity(item.id))}
                  >
                    +
                  </button>
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
        <tfoot>
          <tr style={{ marginLeft: "25%" }}>
            <td colSpan=""></td>
            <td>total:${calculateTotal().toFixed(2)}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Cart;
