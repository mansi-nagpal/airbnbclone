import React, { useState } from 'react'
import "./SignUp.css";
import { auth } from "./firebase";
import { useHistory,Link } from "react-router-dom";



function SignUp() {
    const history = useHistory();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    

    const SignUp= e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/home')
                }
            })
            .catch(error => alert(error.message))
    }


  return (
    <div className='Login'>
    <h2>Sign Up</h2>
    <h1>Welcome to Airbnb</h1>

     <input type="email"  id="floatingInput" placeholder='Email address' value={email} onChange={e=>setEmail(e.target.value)}/>
     
  
   
      <input type="password"  id="floatingPassword" placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/>
     
    

     
       <button type='submit' onClick={SignUp}>Sign Up</button>
       <Link to="/login">
        <button type='submit' >Sign In</button>
        </Link>
       
    </div>
  )
}

export default SignUp
