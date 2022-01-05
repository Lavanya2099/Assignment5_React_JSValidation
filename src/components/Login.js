import React from 'react'

import { useState } from "react";
import { withRouter } from 'react-router-dom'

function Login(props) {
    const [loginData, setloginData] = useState({
        email:'',
        password:''
       
})

const [emailError, setemailError] = useState("")
const validateEmail=()=>{
    if(loginData.email){
        let regex = /^\S+@\S+$/;
        if(regex.test(loginData.email)){
            setemailError("");
            return true;
        }
        else{
            setemailError("enter valid email-Id");
        }}
        else{
            setemailError("enter email-ID");
        }
        return false; 
};


const [passwordError, setpasswordError] = useState("")
const validatePassword=()=>{
    if(loginData.password){
    let regex =/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if(regex.test(loginData.password)){
            setpasswordError("");
            return true;
        }
        else{
            setpasswordError("enter valid password, minimum eight characters and containing uppercase,lowercase and number");
        }}
        else{
            setpasswordError("enter password");
        }
        return false; 
};





let updateLoginData=(event)=>{
    // event.preventDefault();
    setloginData({
        ...loginData,
        [event.target.name]:event.target.value,
    })
}


let saveData=(event)=>{
  
    validateEmail();
    validatePassword();
  
    if(validateEmail()&& validatePassword()){
        props.getLoginData(loginData)
        // event.preventDefault();
        //clearing the form
        setloginData({
            email:'',
            password:''
           
        });
  
    }
    
};
 let navigateToSignUp=()=>{
        // console.log(props);
        props.history.push('/signup')
       }
    return (
        <div>
             
             <h1>Login</h1>
           <div className='container'>
           
            <div className="mb-3">
                    <input
                    name="email"
                    type="text"
                    className="form-control"
                    placeholder="Enter Email"
                    value={loginData.email}
                    onChange={(event)=>{updateLoginData(event)}}
                    />
                {emailError&&<div className="some">{emailError}</div>}
                </div>
                <div className="mb-3">
                    <input
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    value={loginData.password}
                    onChange={(event)=>{updateLoginData(event)}}
                    />
                {passwordError&&<div className="some">{passwordError}</div>}
                </div>
            
               
                <button type="submit" className="btn btn-primary" onClick={saveData}>Login</button>
              
            </div>
            <h4 style={{cursor:'pointer'}} onClick={navigateToSignUp}>Don't have an account? Signup here !</h4>
        </div>
    )
}

export default withRouter(Login)

