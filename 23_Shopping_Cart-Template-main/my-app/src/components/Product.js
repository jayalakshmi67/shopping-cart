import React from "react";
import {connect} from 'react-redux'
import {addCart} from '../Redux-toolkit/CartSlice'

import "./Product.css";
const Product = (props) => {
  
function handleAddcart(){
  const {name,price,id} =props
  props.addCartDispatch({name,price,id})
}
  return (
    <div className="card">
      <img src={props.imgURL} alt={props.name} />
      <h2>{props.name}</h2>
      <p>$ {props.price}</p>
      <button onClick = {handleAddcart}>Add to cart</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) =>{
  return{
      addCartDispatch:(data)=>dispatch(addCart(data))
  }
}

export default connect(null,mapDispatchToProps) (Product);
