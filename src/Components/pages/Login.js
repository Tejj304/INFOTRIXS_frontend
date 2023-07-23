import React, { useEffect, useState } from "react"
import axios from 'axios' ;
import {useNavigate , Link} from 'react-router-dom';
import './login.css';

function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }

  return (

    <>

        <div id="login-form-wrap">
            <h1>Login</h1>
            
            <form id="login-form" action='POST'>
                
                <p>
                    <input type="email" onChange={(e) => { setEmail(e.target.value) }} id="email" name="email" placeholder="Email" required/>
                    <i class="validation">
                    <span></span><span></span></i>
                </p>

                <p>
                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} id="password" name="password" placeholder="Password" required/>
                    <i class="validation">
                    <span></span><span></span></i>
                </p>

                <p>
                    <input type="submit"  onClick={submit}  id="login" value="Login"/>
                </p>

            </form>
  
            <div id="create-account-wrap">
                <p>Not a member? 
                    <Link to="/signup">Signup Page</Link>
                </p>
            </div>
  
        </div>    
 
    </>

  )
}

export default Login ;