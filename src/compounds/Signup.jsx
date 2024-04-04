import React, { useState } from 'react';
import signuppic from "../image/signuppic.png"
import { NavLink , useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate=useNavigate();
    const [User, setUser] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: "",
        phonenumber: "",
    
    });

    const handleEvent = (event) => {
        const { value, name } = event.target;
        setUser( {...User, [name]: value });
    };

    const PostData=async(e)=>{
e.preventDefault();
const {name , email,password,cpassword,phonenumber,}=User;
const res =   await fetch("/signin",{
    method:"POST",
    headers: {
    "Content-Type":"application/json"
    } ,
    body:JSON.stringify({
        name , email,password,cpassword,phonenumber,
    })


});

const data = await res.json();
if(res.status!==422 || !data ){
    window.alert("Invalid Registration");
    console.log("Invalid registration");
}else{
    window.alert("Registartion Successfully");
    console.log("Registartion Successfully");
    navigate.push("/login");

}
    }



    return(
        <>
        <section className='signup'>
<div className='container  mt-5'>
<div className='signup-contact'>
    <div className='sign-up form'>
    <h2 className='form-title'>
        Signup
    </h2>
    <form className='register-form' id='register-form' method='POST'>
    <div className="form-group">
          <label htmlFor="Name">
          <i class="zmdi zmdi-account"></i>
          </label>
          <input type='text' name='name' id='name' autoComplete='off' placeholder='your name' value={User.name} onChange={handleEvent}/>
          </div>

          <div className="form-group">
          <label htmlFor="email">
          <i class="zmdi zmdi-email"></i>
          </label>
          <input type='text' name='email' id='email' autoComplete='off' placeholder='enter the email'value={User.email} onChange={handleEvent}/>
          </div>

          <div className="form-group">
          <label htmlFor="password">
          <i class="zmdi zmdi-lock"></i>
          </label>
          <input type='password' name='password' id='password' autoComplete='off' placeholder='enter your password' value={User.password} onChange={handleEvent}/>
          </div>

          <div className="form-group">
          <label htmlFor="cpassowrd">
          <i class="zmdi zmdi-lock"></i>
          </label>
          <input type='password' name='cpassword' id='cpassword' autoComplete='off' placeholder='enter your conform pasdsword'value={User.cpassword} onChange={handleEvent}/>
          </div>

          <div className="form-group">
          <label htmlFor="phone number">
          <i class="zmdi zmdi-phone"></i>
          </label>
          <input type='number' name='phonenumber' id='phnone number' autoComplete='off' placeholder='enter your phone number'value={User.phonenumber} onChange={handleEvent}/>
          </div>

          <div className="form-group">
          <label htmlFor="work">
          <i class="zmdi zmdi-comment-text"></i>
          </label>
          <input type='text' name='work' id='work' autoComplete='off' placeholder='your work'value={User.work} onChange={handleEvent}/>
          </div>

          <div className='form-group form-button'>
            <input  type='submit' name='signup' id='signup' className='form-submit' value="register" onClick={PostData} />
          </div> 
    </form>
    </div>
    <div className='signup-image'> 
        <figure>
            <img src={signuppic} alt='registration pic'height={"80%"} width={"50%"}/>
        </figure>
        <NavLink to="/Login" className="signuo-image-link">I am already register</NavLink>
    </div>

    
</div>

</div>

        </section>
        

        </>
    )
}

export default Signup;