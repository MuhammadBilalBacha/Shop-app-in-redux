import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "../Redux-Store/SliceFunction/Slice";
import { toast } from "react-toastify";
import "./Cart.css";

const Cart = () => {
  const myState = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log(myState);

  const removeHandler = (itemId) => {
    dispatch(cartAction.removeCart(itemId));
    toast.success("Product remove successfully !");
  };

  return (
    <div className="py-5 mt-5 container">
      <h3 className="py-3 text-center">My Shopping</h3>

      {/* <h3 className="text-center my-3">
        Got to products to select your buying procuts !
      </h3> */}

      {myState.map((item) => (
        <div className="myCart my-3" key={item.id}>
          <div className="d-flex">
            <div>
              {" "}
              <img src={item.image} alt="" />
            </div>
            <div className="align-self-center mx-3 price fw-bold">
              ${item.price}
            </div>
          </div>

          <div className="align-self-center">
            <button onClick={() => removeHandler(item.id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
