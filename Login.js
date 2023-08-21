import React, { useState } from 'react'
import "./Login.css";
import { auth } from "./firebase";
import { useHistory } from "react-router-dom";



function Login() {
    const history = useHistory();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const SignIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/home')
            })
            .catch(error => alert(error.message))
    }

    


  return (
    <div  className='Login'>
    <h2>Log in</h2>
    <h1>Welcome to Airbnb</h1>

     <input type="email"  id="floatingInput" placeholder='Email address' value={email} onChange={e=>setEmail(e.target.value)}/>
     
  
   
      <input type="password"  id="floatingPassword" placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/>
     
    

     
       <button type='submit' onClick={SignIn}>Sign In</button>
      
       
       <a href="/signup"><button className='Second' type='submit' >Sign Up</button></a>
       
      
       
    
        
       
    </div>
  )
}

export default Login