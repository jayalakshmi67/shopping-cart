import React from "react";
import "./Cart.css";
import {connect} from 'react-redux'
import { showCartList } from "../Redux-toolkit/CartSlice";
const Cart = (props) => {
  
  const quantity = props.cart.totalCartItems;

  function handleClick(){
    props.showcartDispatch(true)
  }
  return (
    <div className="cartIcon" onClick = {handleClick}>
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

const mapStateToProps = (state)=>{
  return state
}

const mapDispatchToProps = (dispatch)=>{
    return{
         showcartDispatch:(data)=>dispatch(showCartList(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Cart);
