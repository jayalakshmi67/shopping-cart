import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import {connect} from 'react-redux'
const CartItems = (props) => {
  const {cartItems} = props.cart
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map(e=>(
        <li>
          <CartItem id={e.id} price={e.price} name={e.name} quantity={e.quantity} total={e.totalPrice}/>
        </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state)=>{
  return state
}

export default connect(mapStateToProps) (CartItems);
