import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CartItem from "../../components/cart-item/cart-item.component";

import Checkout from "../../components/checkout-item/checkout-item.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block"> 
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <Checkout key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTALL ${total}</span>
      </div>
    </div>
  );
};

const mapStatetToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStatetToProps)(CheckoutPage);
