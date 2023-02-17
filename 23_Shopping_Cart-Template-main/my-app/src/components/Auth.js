import React from "react";

import "./Auth.css";
import { connect } from 'react-redux'
import {logStatus} from '../Redux-toolkit/AuthSlice'

const Auth = (props) => {

  const {authDispatch} = props
 
  function handleSubmit(e){
    e.preventDefault()
    authDispatch(true)
  }
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit = {handleSubmit}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch)=>{
  return {
    authDispatch:(data)=>dispatch(logStatus(data))
  }
}

export default connect(null,mapDispatchToProps) (Auth);
