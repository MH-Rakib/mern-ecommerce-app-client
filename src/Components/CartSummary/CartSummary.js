import React, { useContext } from "react";
import "./CartSummary.css";
import { UserContext } from "./../../App";

const CartSummary = () => {
  const { cart } = useContext(UserContext);
  const [cartData, setCartData] = cart;

  const totalPrice = cartData.reduce(
    (prev, item) =>
      (prev =
        prev + parseFloat(item.price) * parseFloat(item.selectedQuantity)),
    0
  );

  const deliveryCharge = cartData.length && 100;
  const subTotal = totalPrice + deliveryCharge;

  return (
    <div className="cartSummary">
      <p className="cartSummaryHeading cartSummaryInfo">Your Cart Summary</p>
      <p className="itemsCount cartSummaryInfo d-flex justify-content-between">
        <span>Total Item:</span> <span>{cartData.length} item's</span>
      </p>
      <p className="totalPrice cartSummaryInfo d-flex justify-content-between">
        {" "}
        <span>Total Price:</span> <span>{totalPrice} tk</span>
      </p>
      <p className="deliveryCharge cartSummaryInfo d-flex justify-content-between">
        <span>Delivery Charge:</span> <span>{deliveryCharge || `0`} tk</span>
      </p>
      <hr />
      <p className="subTotal cartSummaryInfo d-flex justify-content-between">
        {" "}
        <span>Subtotal:</span> <span>{subTotal} tk</span>
      </p>
      <button className="checkoutButton">Proceed To Checkout</button>
    </div>
  );
};

export default CartSummary;
