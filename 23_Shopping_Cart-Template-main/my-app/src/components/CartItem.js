import React from "react";
import "./Cart.css";
import {connect} from 'react-redux'
import { addCart,removeCart } from "../Redux-toolkit/CartSlice";

const CartItem = ({ name, quantity, total, price, id ,addCartDispatch,removeCartDispatch}) => {

  function handleAddCart(){
    addCartDispatch({name,price,id})
  }

  function handleRemoveCart(){
    removeCartDispatch({name,price,id})
  }

  

  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick = {handleRemoveCart}>
        -
      </button>
      <button className="cart-actions" onClick = {handleAddCart} >
        +
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) =>{
  return{
        addCartDispatch:(data)=>dispatch(addCart(data)),
        removeCartDispatch:(data)=>dispatch(removeCart(data))


  }
}

export default connect(null,mapDispatchToProps) (CartItem);
