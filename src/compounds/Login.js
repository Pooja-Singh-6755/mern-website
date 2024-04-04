import React from "react";
import loginpic from "../image/login.png";
import { NavLink } from 'react-router-dom';
import"../App.css";


const Login=()=>{
    return(
        <>
      <div className="container-login">
        <div className="main-part">
            <div className="item-1">
            <div className="login-form">
            <label htmlFor="email">
          <i class="zmdi zmdi-email"></i>
          </label>
          <input type='text' name='email' id='email' autoComplete='off' placeholder='enter the email'/>
            </div>
            <div className="login-form">
          <label htmlFor="phone number">
          <i class="zmdi zmdi-phone"></i>
          </label>
          <input type='number' name='phone number' id='phnone number' autoComplete='off' placeholder='enter your phone number'/>
          </div>

            </div>
            <div className="item-2">
            <figure>
            <img src={loginpic} alt='login pic' height={"100%"} width={"100%"}/>
        </figure>
        <NavLink to="/Login" className="signuo-image-link">Signup</NavLink>
            </div>
        </div>
      </div>

        </>
    )
}

export default Login;