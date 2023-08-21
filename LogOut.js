import React, { useState } from 'react'
import "./Login.css";
import { auth } from "./firebase";
import { useHistory } from "react-router-dom";



function LogOut() {
    const history = useHistory();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const LogOut = e => {
        e.preventDefault();

        auth
            .signOut(email, password)
            .then(auth => {
                history.push('/login')
            })
            .catch(error => alert(error.message))
    }

    


  return (
    <div className='Login'>
    <h2>Log Out</h2>
    

     <input type="email"  id="floatingInput" placeholder='Email address' value={email} onChange={e=>setEmail(e.target.value)}/>
     
  
   
      <input type="password"  id="floatingPassword" placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/>
     


     
       <button type='submit' onClick={LogOut}>Log Out</button>
      
       

       
      
       
    
        
       
    </div>
  )
}

export default LogOut